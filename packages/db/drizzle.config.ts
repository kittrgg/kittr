import type { Config } from 'drizzle-kit';

if (!process.env.POSTGRES_URL) {
  throw new Error('No POSTGRES_URL provided to Drizzle.');
}

// prettier-ignore
export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  connectionString: `${process.env.POSTGRES_URL}?sslmode=require`
} satisfies Config;
