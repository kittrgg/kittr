import '../globals.css';
import type { GenerateKittrMetadataArgs } from '@/app/generateKittrMetadata';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { RootLayout } from '@/app/(site)/RootLayout';

export const generateMetadata = () => {
  return {
    ...generateKittrMetadata({
      title: 'kittr',
      description: 'The content platform. Get kittd.',
    } as GenerateKittrMetadataArgs),
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  };
};

export default function Root({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
