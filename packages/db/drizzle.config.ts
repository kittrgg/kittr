import type { Config } from 'drizzle-kit';

// prettier-ignore
export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  connectionString: process.env.POSTGRES_URL
} satisfies Config;
