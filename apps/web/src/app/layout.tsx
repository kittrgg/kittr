import './globals.css';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { RootLayout } from '@/app/RootLayout';

export const generateMetadata = () => {
  return {
    ...generateKittrMetadata({
      title: 'kittr',
      description: 'The content platform. Get kittd.',
    }),
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  };
};

export default function Root({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
