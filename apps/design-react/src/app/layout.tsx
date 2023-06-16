'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import { RootLayout } from '#/app/RootLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <RootLayout pathname={pathname}>{children}</RootLayout>;
}
