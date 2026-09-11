import { NextResponse } from 'next/server'
import { getDatabaseClient } from '@/lib/libsql'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const country = searchParams.get('country') || ''
    const subject = searchParams.get('subject') || ''
    const degree = searchParams.get('degree') || ''
    const status = searchParams.get('status') || ''
    const isTextile = searchParams.get('isTextile')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    const client = getDatabaseClient()

    // A newly provisioned Turso integration starts with an empty database.
    // Bootstrap the schema and bundled seed data on the first request.
    try {
      await client.execute('SELECT 1 FROM Scholarship LIMIT 1')
    } catch (error) {
      if (!String(error).includes('no such table')) throw error
      // @ts-ignore The seed module is JavaScript and intentionally shared with the CLI seeder.
      const { seedDatabase } = await import('../../../../seed-turso.mjs')
      await seedDatabase(client)
    }

    // Build WHERE clause
    const conditions: string[] = []
    const args: Record<string, string> = {}

    if (search) {
      conditions.push(`(title LIKE @search OR description LIKE @search OR university LIKE @search OR subject LIKE @search)`)
      args.search = `%${search}%`
    }
    if (country && country !== 'all') {
      conditions.push(`country LIKE @country`)
      args.country = `%${country}%`
    }
    if (subject && subject !== 'all') {
      conditions.push(`subject LIKE @subject`)
      args.subject = `%${subject}%`
    }
    if (degree && degree !== 'all') {
      conditions.push(`degree = @degree`)
      args.degree = degree
    }
    if (status && status !== 'all') {
      conditions.push(`status = @status`)
      args.status = status
    }
    if (isTextile === 'true') {
      conditions.push(`isTextile = 1`)
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

    // Get scholarships
    const offset = (page - 1) * limit
    const scholarshipsResult = await client.execute({
      sql: `SELECT * FROM Scholarship ${whereClause} ORDER BY deadlineDate ASC LIMIT ${limit} OFFSET ${offset}`,
      args: args as any,
    })

    // Get total count
    const countResult = await client.execute({
      sql: `SELECT COUNT(*) as total FROM Scholarship ${whereClause}`,
      args: args as any,
    })

    // Get stats
    const [totalResult, openResult, closingResult, closedResult, textileResult, countriesResult, subjectsResult, degreesResult] = await Promise.all([
      client.execute('SELECT COUNT(*) as count FROM Scholarship'),
      client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'open'"),
      client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'closing_soon'"),
      client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'closed'"),
      client.execute('SELECT COUNT(*) as count FROM Scholarship WHERE isTextile = 1'),
      client.execute('SELECT DISTINCT country FROM Scholarship'),
      client.execute('SELECT DISTINCT subject FROM Scholarship'),
      client.execute('SELECT DISTINCT degree FROM Scholarship'),
    ])

    const total = Number(countResult.rows[0]?.total || 0)

    const scholarships = scholarshipsResult.rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      university: row.university,
      country: row.country,
      subject: row.subject,
      degree: row.degree,
      amount: row.amount,
      applicationUrl: row.applicationUrl,
      openDate: row.openDate,
      deadlineDate: row.deadlineDate,
      status: row.status,
      isTextile: Number(row.isTextile) === 1,
      requirements: row.requirements,
      benefits: row.benefits,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    }))

    const stats = {
      total: Number(totalResult.rows[0]?.count || 0),
      open: Number(openResult.rows[0]?.count || 0),
      closingSoon: Number(closingResult.rows[0]?.count || 0),
      closed: Number(closedResult.rows[0]?.count || 0),
      textile: Number(textileResult.rows[0]?.count || 0),
      countries: countriesResult.rows.map((r: any) => r.country),
      subjects: subjectsResult.rows.map((r: any) => r.subject),
      degrees: degreesResult.rows.map((r: any) => r.degree),
    }

    client.close()

    return NextResponse.json({
      scholarships,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats,
    })
  } catch (error) {
    console.error('Error fetching scholarships:', error)
    return NextResponse.json({ error: 'Failed to fetch scholarships', details: String(error) }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const client = getDatabaseClient()

    const id = 'sch_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8)

    await client.execute({
      sql: `INSERT INTO Scholarship (id, title, description, university, country, subject, degree, amount, applicationUrl, openDate, deadlineDate, status, isTextile, requirements, benefits, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
      args: [
        id, body.title, body.description, body.university, body.country,
        body.subject, body.degree, body.amount, body.applicationUrl,
        body.openDate, body.deadlineDate, body.status || 'open',
        body.isTextile ? 1 : 0, body.requirements || '', body.benefits || ''
      ],
    })

    client.close()
    return NextResponse.json({ id, ...body }, { status: 201 })
  } catch (error) {
    console.error('Error creating scholarship:', error)
    return NextResponse.json({ error: 'Failed to create scholarship' }, { status: 500 })
  }
}
