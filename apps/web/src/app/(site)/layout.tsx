import '@/app/globals.css';
import type { GenerateKittrMetadataArgs } from '@/app/generateKittrMetadata';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { RootLayout } from '@/app/(site)/RootLayout';
import { MainSiteNav } from '@/app/(site)/MainSiteNav';

export const generateMetadata = () => {
  return {
    ...generateKittrMetadata({
      title: 'kittr',
      description: 'The content platform. Get kittd.',
    } as GenerateKittrMetadataArgs),
  };
};

export default function Root({ children }: { children: React.ReactNode }) {
  return <RootLayout sideNav={<MainSiteNav />}>{children}</RootLayout>;
}
