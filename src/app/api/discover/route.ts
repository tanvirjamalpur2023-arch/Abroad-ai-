import { NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { getDatabaseClient } from '@/lib/libsql'

export async function POST(request: Request) {
  try {
    const { query } = await request.json()
    const searchQuery = query || 'international scholarship wet process engineering textile dyeing finishing 2026 2027 masters PhD'

    const zai = await ZAI.create()
    const searchResults = await zai.functions.invoke('web_search', { query: searchQuery, num: 10 })

    if (!searchResults || searchResults.length === 0) {
      return NextResponse.json({ success: false, message: 'No results found', discovered: 0 })
    }

    const searchContext = searchResults.map((r: { url: string; name: string; snippet: string }) =>
      `URL: ${r.url}\nTitle: ${r.name}\nSnippet: ${r.snippet}`
    ).join('\n\n')

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: `You are a scholarship data extraction expert. Extract scholarship information as JSON array. Each object: title, description (50+ words), university, country, subject, degree, amount, applicationUrl, openDate (YYYY-MM-DD), deadlineDate (YYYY-MM-DD), requirements, benefits. Return ONLY JSON array.` },
        { role: 'user', content: `Extract scholarships from:\n\n${searchContext}` }
      ],
      temperature: 0.3,
      max_tokens: 3000,
    })

    const responseText = completion.choices[0]?.message?.content || '[]'
    let discoveredScholarships = []
    try {
      const jsonMatch = responseText.match(/\[[\s\S]*\]/)
      if (jsonMatch) discoveredScholarships = JSON.parse(jsonMatch[0])
    } catch { return NextResponse.json({ success: false, discovered: 0 }) }

    const client = getDatabaseClient()
    let savedCount = 0

    for (const s of discoveredScholarships) {
      if (!s.title || !s.university || !s.subject) continue
      const existing = await client.execute({ sql: "SELECT id FROM Scholarship WHERE title LIKE ?", args: [`%${s.title.substring(0, 30)}%`] })
      if (existing.rows.length === 0) {
        const id = 'sch_disc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8)
        const now = new Date()
        const openDate = s.openDate || now.toISOString().split('T')[0]
        const deadlineDate = s.deadlineDate || new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

        await client.execute({
          sql: `INSERT INTO Scholarship (id, title, description, university, country, subject, degree, amount, applicationUrl, openDate, deadlineDate, status, isTextile, requirements, benefits, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'open', 1, ?, ?, datetime('now'), datetime('now'))`,
          args: [id, s.title, s.description || `Scholarship at ${s.university}`, s.university, s.country || 'Unknown', s.subject, s.degree || "Master's", s.amount || 'Varies', s.applicationUrl || '#', openDate + 'T00:00:00.000Z', deadlineDate + 'T00:00:00.000Z', s.requirements || '', s.benefits || '']
        })
        savedCount++
      }
    }

    client.close()
    return NextResponse.json({ success: true, discovered: savedCount, message: `Saved ${savedCount} new scholarships` })
  } catch (error) {
    console.error('Discover error:', error)
    return NextResponse.json({ success: false, discovered: 0 })
  }
}
