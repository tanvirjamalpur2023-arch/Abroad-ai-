import { NextResponse } from 'next/server'
import { getDatabaseClient } from '@/lib/libsql'

export async function POST() {
  try {
    const client = getDatabaseClient()
    const now = new Date()
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

    const allResult = await client.execute('SELECT id, title, university, status, openDate, deadlineDate FROM Scholarship')
    let updatedCount = 0
    let newNotifications = 0

    for (const scholarship of allResult.rows) {
      const deadline = new Date(scholarship.deadlineDate as string)
      const openDate = new Date(scholarship.openDate as string)
      let newStatus = scholarship.status as string

      if (deadline < now) newStatus = 'closed'
      else if (deadline <= sevenDaysFromNow) newStatus = 'closing_soon'
      else if (openDate <= now) newStatus = 'open'
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

    const totalResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship")
    const openResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'open'")
    const closingResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'closing_soon'")
    const closedResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'closed'")

    client.close()

    return NextResponse.json({
      success: true,
      message: `Auto-update completed: ${updatedCount} updated, ${newNotifications} new notifications`,
      updatedCount,
      newNotifications,
      stats: {
        total: Number(totalResult.rows[0]?.count || 0),
        open: Number(openResult.rows[0]?.count || 0),
        closingSoon: Number(closingResult.rows[0]?.count || 0),
        closed: Number(closedResult.rows[0]?.count || 0),
      },
      lastUpdated: now.toISOString(),
    })
  } catch (error) {
    console.error('Auto-update error:', error)
    return NextResponse.json({ success: false, message: 'Auto-update failed', lastUpdated: new Date().toISOString() }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = getDatabaseClient()
    const totalResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship")
    const openResult = await client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE status = 'open'")
    client.close()

    return NextResponse.json({
      stats: {
        total: Number(totalResult.rows[0]?.count || 0),
        open: Number(openResult.rows[0]?.count || 0),
      },
      message: 'Status OK',
    })
  } catch (error) {
    return NextResponse.json({ stats: { total: 0, open: 0 }, message: 'Database unavailable' })
  }
}
