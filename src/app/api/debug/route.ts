import { NextResponse } from 'next/server'

export async function GET() {
  const authToken = process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN
  const databaseUrl = process.env.DATABASE_URL || process.env.TURSO_DATABASE_URL

  return NextResponse.json({
    hasAuthToken: !!authToken,
    hasDatabaseUrl: !!databaseUrl,
    databaseUrlPrefix: databaseUrl ? databaseUrl.substring(0, 25) + '...' : 'NOT SET',
    authTokenPrefix: authToken ? authToken.substring(0, 10) + '...' : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
  })
}
