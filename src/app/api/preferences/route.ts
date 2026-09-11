import { NextResponse } from 'next/server'
import { getDatabaseClient } from '@/lib/libsql'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const client = getDatabaseClient()
    await client.execute('DELETE FROM UserPreference')
    const id = 'pref_' + Date.now()
    await client.execute({
      sql: "INSERT INTO UserPreference (id, preferredSubjects, preferredCountries, notificationEnabled, emailNotifications) VALUES (?, ?, ?, ?, ?)",
      args: [id, body.preferredSubjects || '', body.preferredCountries || '', body.notificationEnabled !== false ? 1 : 0, body.emailNotifications !== false ? 1 : 0]
    })
    client.close()
    return NextResponse.json({ id, ...body })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = getDatabaseClient()
    const result = await client.execute('SELECT * FROM UserPreference LIMIT 1')
    client.close()
    if (result.rows.length > 0) {
      const row = result.rows[0] as any
      return NextResponse.json({ id: row.id, preferredSubjects: row.preferredSubjects, preferredCountries: row.preferredCountries, notificationEnabled: Number(row.notificationEnabled) === 1, emailNotifications: Number(row.emailNotifications) === 1 })
    }
    return NextResponse.json({ error: 'Failed to fetch preferences' }, { status: 500 })
  } catch (error) {
    return NextResponse.json(null)
  }
}
