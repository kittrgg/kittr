import { createPool } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { schema } from '../drizzle/schema';

if (!process.env.POSTGRES_URL) {
  throw new Error('No Postgres_URL given to Drizzle.');
}

const dbClient = createPool({
  ssl: true,
  connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(dbClient, { schema });
export * from '../drizzle/schema';
