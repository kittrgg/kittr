import type { Config } from 'drizzle-kit';

if (!process.env.POSTGRES_URL) {
  throw new Error('No POSTGRES_URL provided to Drizzle.');
}

const config: Config = {
  schema: './src/schema.ts',
  out: './drizzle',
  connectionString: `${process.env.POSTGRES_URL}?sslmode=require`,
};

export default config;
