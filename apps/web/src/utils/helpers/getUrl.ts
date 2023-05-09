export const getTrpcUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? '/api/trpc'
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://kittr.gg/api/trpc'
    : 'http://localhost:3000/api/trpc';

export const getUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://kittr.gg'
    : 'http://localhost:3000';
