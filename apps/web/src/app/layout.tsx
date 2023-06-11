'use client';

import '@kittr/ui/styles.css';
import './globals.css';
import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import { RootLayout } from '@/app/RootLayout';

export const metadata: Metadata = {
  title: 'kittr',
  description: 'Where streamers to share kits - and you use them.',
  openGraph: {
    images: ['/img/logo-lockup-padded.png'],
  },
};

export default function Root({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <RootLayout pathname={pathname ?? ''}>{children}</RootLayout>;
}
