import { NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { getDatabaseClient } from '@/lib/libsql'

// Vercel Cron calls this every 24 hours at 6:00 AM UTC
export async function GET() {
  try {
    // First run auto-update (update statuses & create notifications)
    const client = getDatabaseClient()
    const now = new Date()
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

    const allResult = await client.execute('SELECT id, title, university, status, openDate, deadlineDate FROM Scholarship')
    let updatedCount = 0
    let newNotifications = 0

    for (const scholarship of allResult.rows) {
      const deadline = new Date(scholarship.deadlineDate as string)
      let newStatus = scholarship.status as string

      if (deadline < now) newStatus = 'closed'
      else if (deadline <= sevenDaysFromNow) newStatus = 'closing_soon'
      else newStatus = 'open'

      if (newStatus !== scholarship.status) {
        await client.execute({ sql: "UPDATE Scholarship SET status = ? WHERE id = ?", args: [newStatus, scholarship.id] })
        updatedCount++
      }

      if (newStatus === 'closing_soon') {
        const daysRemaining = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        const existing = await client.execute({ sql: "SELECT id FROM Notification WHERE scholarshipId = ? AND type = 'deadline_approaching'", args: [scholarship.id] })
        if (existing.rows.length === 0) {
          const nid = 'notif_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8)
          await client.execute({
            sql: "INSERT INTO Notification (id, scholarshipId, type, message, isRead, createdAt) VALUES (?, ?, 'deadline_approaching', ?, 0, datetime('now'))",
            args: [nid, scholarship.id, `"${scholarship.title}" at ${scholarship.university} - Only ${daysRemaining} days left!`]
          })
          newNotifications++
        }
      }
    }
    client.close()

    // Then discover new scholarships from web
    let discoveredCount = 0
    try {
      const zai = await ZAI.create()

      // Search for different topics each time for variety
      const searchQueries = [
        'international scholarship textile engineering wet process masters PhD 2026 2027',
        'new scholarship dyeing finishing sustainable textile 2026 2027',
        'scholarship polymer science fiber technology 2026 2027 international students',
      ]

      const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
      const searchResults = await zai.functions.invoke('web_search', { query: randomQuery, num: 10 })

      if (searchResults && searchResults.length > 0) {
        const searchContext = searchResults.map((r: { url: string; name: string; snippet: string }) =>
          `URL: ${r.url}\nTitle: ${r.name}\nSnippet: ${r.snippet}`
        ).join('\n\n')

        const completion = await zai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a scholarship data extraction expert. Extract scholarship information as JSON array. Each object: title, description (50+ words), university, country, subject, degree, amount, applicationUrl, openDate (YYYY-MM-DD), deadlineDate (YYYY-MM-DD), requirements, benefits. Return ONLY JSON array.' },
            { role: 'user', content: `Extract scholarships from:\n\n${searchContext}` }
          ],
          temperature: 0.3,
          max_tokens: 3000,
        })

        const responseText = completion.choices[0]?.message?.content || '[]'
        let discoveredScholarships: any[] = []
        try {
          const jsonMatch = responseText.match(/\[[\s\S]*\]/)
          if (jsonMatch) discoveredScholarships = JSON.parse(jsonMatch[0])
        } catch { /* skip invalid JSON */ }

        const dbClient = getDatabaseClient()
        for (const s of discoveredScholarships) {
          if (!s.title || !s.university || !s.subject) continue
          const existing = await dbClient.execute({ sql: "SELECT id FROM Scholarship WHERE title LIKE ?", args: [`%${s.title.substring(0, 30)}%`] })
          if (existing.rows.length === 0) {
            const id = 'sch_auto_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8)
            const openDate = s.openDate || now.toISOString().split('T')[0]
            const deadlineDate = s.deadlineDate || new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

            await dbClient.execute({
              sql: `INSERT INTO Scholarship (id, title, description, university, country, subject, degree, amount, applicationUrl, openDate, deadlineDate, status, isTextile, requirements, benefits, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'open', 1, ?, ?, datetime('now'), datetime('now'))`,
              args: [id, s.title, s.description || `Scholarship at ${s.university}`, s.university, s.country || 'Unknown', s.subject, s.degree || "Master's", s.amount || 'Varies', s.applicationUrl || '#', openDate + 'T00:00:00.000Z', deadlineDate + 'T00:00:00.000Z', s.requirements || '', s.benefits || '']
            })
            discoveredCount++
          }
        }
        dbClient.close()
      }
    } catch (discoverError) {
      console.error('Auto-discover scholarship search failed:', discoverError)
      // Continue - status updates still succeeded
    }

    return NextResponse.json({
      success: true,
      message: `Auto-update: ${updatedCount} statuses updated, ${newNotifications} notifications, ${discoveredCount} new scholarships discovered`,
      updatedCount,
      newNotifications,
      discoveredCount,
      lastUpdated: now.toISOString(),
    })
  } catch (error) {
    console.error('Auto-discover error:', error)
    return NextResponse.json({ success: false, message: 'Auto-discover failed', lastUpdated: new Date().toISOString() })
  }
}
