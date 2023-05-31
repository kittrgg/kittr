'use client';

import '@kittr/ui/styles.css';
import './globals.css';
import { usePathname } from 'next/navigation';
import { RootLayout } from '@/app/RootLayout';

export default function Root({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <RootLayout pathname={pathname ?? ''}>{children}</RootLayout>;
}
