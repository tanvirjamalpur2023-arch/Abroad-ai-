import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Lazy initialization - only create client when first used
let _db: PrismaClient | undefined = undefined

function getDb(): PrismaClient {
  if (_db) return _db

  const authToken = process.env.DATABASE_AUTH_TOKEN
  const databaseUrl = process.env.DATABASE_URL

  if (authToken && databaseUrl && databaseUrl.startsWith('libsql://')) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const adapterModule = require('@prisma/adapter-libsql')
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { createClient } = require('@libsql/client')

      // Handle both export names for compatibility
      const PrismaLibSql = adapterModule.PrismaLibSQL || adapterModule.PrismaLibSql

      const libsql = createClient({
        url: databaseUrl,
        authToken,
      })

      const adapter = new PrismaLibSql(libsql)

      _db = new PrismaClient({
        adapter,
      })
      console.log('✅ Turso database connected successfully')
      return _db
    } catch (error) {
      console.error('❌ Failed to initialize Turso adapter:', error)
      throw error
    }
  }

  // Standard PrismaClient for local SQLite development
  console.log('📦 Using local SQLite database')
  _db = new PrismaClient()
  return _db
}

// Export a proxy that lazily initializes the database connection
export const db = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    const actualDb = getDb()
    const value = Reflect.get(actualDb, prop, receiver)
    if (typeof value === 'function') {
      return value.bind(actualDb)
    }
    return value
  },
})
