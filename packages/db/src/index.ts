import { createClient } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

if (!process.env.POSTGRES_URL) {
  throw new Error('No Postgres_URL given to Drizzle.');
}

const dbClient = createClient({ connectionString: process.env.POSTGRES_URL });

export const db = drizzle(dbClient);
