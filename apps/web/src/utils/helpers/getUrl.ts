export const getTrpcUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "/api/trpc"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "https://www.kittr.gg/api/trpc"
      : "http://localhost:3000/api/trpc"

export const getUrl = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
  ? process.env.NEXT_PUBLIC_VERCEL_URL
  : process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://www.kittr.gg"
    : "http://localhost:3000"
