export const getUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://kittr.gg"
    : "http://localhost:3000";

export const toURL = (str: string): string => {
  return str.replace(/\s+/g, "-").replace(/[^\w-]/g, "_");
};
