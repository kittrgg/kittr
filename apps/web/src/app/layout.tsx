import './globals.css';
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
  return <RootLayout>{children}</RootLayout>;
}
