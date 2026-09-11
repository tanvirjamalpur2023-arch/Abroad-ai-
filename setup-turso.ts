import { createClient } from '@libsql/client'
import Database from 'better-sqlite3'

const TURSO_URL = process.env.DATABASE_URL
const TURSO_TOKEN = process.env.DATABASE_AUTH_TOKEN

if (!TURSO_URL || !TURSO_TOKEN) {
  throw new Error('DATABASE_URL and DATABASE_AUTH_TOKEN are required')
}

const turso = createClient({ url: TURSO_URL, authToken: TURSO_TOKEN })
const local = new Database('db/custom.db')

async function setup() {
  console.log('🔄 Creating tables on Turso...')

  await turso.execute(`CREATE TABLE IF NOT EXISTS Scholarship (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL,
    university TEXT NOT NULL, country TEXT NOT NULL, subject TEXT NOT NULL,
    degree TEXT NOT NULL, amount TEXT NOT NULL, applicationUrl TEXT NOT NULL,
    openDate TEXT NOT NULL, deadlineDate TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'open',
    isTextile INTEGER NOT NULL DEFAULT 0, requirements TEXT NOT NULL DEFAULT '',
    benefits TEXT NOT NULL DEFAULT '', createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`)
  console.log('✅ Scholarship table created')

  await turso.execute(`CREATE TABLE IF NOT EXISTS Notification (
    id TEXT PRIMARY KEY, scholarshipId TEXT NOT NULL, type TEXT NOT NULL,
    message TEXT NOT NULL, isRead INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`)
  console.log('✅ Notification table created')

  await turso.execute(`CREATE TABLE IF NOT EXISTS UserPreference (
    id TEXT PRIMARY KEY, preferredSubjects TEXT NOT NULL DEFAULT '',
    preferredCountries TEXT NOT NULL DEFAULT '',
    notificationEnabled INTEGER NOT NULL DEFAULT 1,
    emailNotifications INTEGER NOT NULL DEFAULT 1
  )`)
  console.log('✅ UserPreference table created')

  // Check if data exists
  const check = await turso.execute('SELECT COUNT(*) as c FROM Scholarship')
  if ((check.rows[0].c as number) > 0) {
    console.log('✅ Database already has data. Done!')
    return
  }

  // Read from local SQLite
  console.log('📥 Reading from local database...')
  const scholarships = local.prepare('SELECT * FROM Scholarship').all()
  const notifications = local.prepare('SELECT * FROM Notification').all()
  const prefs = local.prepare('SELECT * FROM UserPreference').all()

  console.log(`📊 Found ${scholarships.length} scholarships, ${notifications.length} notifications, ${prefs.length} preferences`)

  // Insert scholarships
  console.log('🌱 Seeding scholarships to Turso...')
  let count = 0
  for (const s of scholarships) {
    try {
      await turso.execute({
        sql: `INSERT OR IGNORE INTO Scholarship (id, title, description, university, country, subject, degree, amount, applicationUrl, openDate, deadlineDate, status, isTextile, requirements, benefits, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [s.id, s.title, s.description, s.university, s.country, s.subject, s.degree, s.amount, s.applicationUrl, s.openDate, s.deadlineDate, s.status, s.isTextile ? 1 : 0, s.requirements || '', s.benefits || '', s.createdAt, s.updatedAt]
      })
      count++
      if (count % 20 === 0) console.log(`  Inserted ${count}/${scholarships.length}...`)
    } catch (err: any) {
      console.error(`❌ Error: ${s.title?.substring(0, 40)} - ${err.message}`)
    }
  }
  console.log(`✅ Seeded ${count} scholarships`)

  // Insert notifications
  for (const n of notifications) {
    try {
      await turso.execute({
        sql: `INSERT OR IGNORE INTO Notification (id, scholarshipId, type, message, isRead, createdAt) VALUES (?, ?, ?, ?, ?, ?)`,
        args: [n.id, n.scholarshipId, n.type, n.message, n.isRead ? 1 : 0, n.createdAt]
      })
    } catch (err: any) { /* skip */ }
  }
  console.log('✅ Notifications seeded')

  // Insert preferences
  for (const p of prefs) {
    try {
      await turso.execute({
        sql: `INSERT OR IGNORE INTO UserPreference (id, preferredSubjects, preferredCountries, notificationEnabled, emailNotifications) VALUES (?, ?, ?, ?, ?)`,
        args: [p.id, p.preferredSubjects || '', p.preferredCountries || '', p.notificationEnabled ? 1 : 0, p.emailNotifications ? 1 : 0]
      })
    } catch (err: any) { /* skip */ }
  }
  console.log('✅ Preferences seeded')

  const final = await turso.execute('SELECT COUNT(*) as c FROM Scholarship')
  console.log(`\n🎉 Total scholarships in Turso: ${final.rows[0].c}`)
  console.log('✅ Database setup complete!')
}

setup().catch(console.error).finally(() => { local.close() })
