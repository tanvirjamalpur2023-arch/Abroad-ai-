import { createClient } from '@libsql/client'

export function getDatabaseClient() {
  const url = process.env.DATABASE_URL || process.env.TURSO_DATABASE_URL
  const authToken = process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN

  if (!url) {
    throw new Error('DATABASE_URL is not configured')
  }

  return createClient(authToken ? { url, authToken } : { url })
}
