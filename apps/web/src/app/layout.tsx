import './globals.css';
import type { Metadata } from 'next';
import { RootLayout } from '@/app/RootLayout';

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: 'kittr',
  description: 'Where streamers to share kits - and you use them.',
  openGraph: {
    images: ['/img/logo-lockup-padded.png'],
  },
};

export default function Root({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
