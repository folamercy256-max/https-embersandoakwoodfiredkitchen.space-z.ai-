import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createDb(): PrismaClient {
  const tursoUrl = process.env.TURSO_DATABASE_URL
  const tursoToken = process.env.TURSO_AUTH_TOKEN

  // Production (Vercel): Turso libSQL database via driver adapter
  if (tursoUrl && tursoToken) {
    const adapter = new PrismaLibSQL({ url: tursoUrl, authToken: tursoToken })
    return new PrismaClient({ adapter })
  }

  // Local / sandbox development: SQLite file
  return new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL ?? 'file:./db/custom.db' } },
  })
}

export const db =
  globalForPrisma.prisma ?? createDb()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
