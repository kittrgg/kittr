import '../../../globals.css';

import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CreatorProfileNav } from './CreatorProfileNav';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import type { GenerateKittrMetadataArgs } from '@/app/generateKittrMetadata';
import { getChannel } from '@/fetches/getChannel';
import { LayoutWrapper } from '@/app/(creators)/channel/[channel]/LayoutWrapper';

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

export function Layout({ children }: { children: ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
