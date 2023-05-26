import type { Metadata } from 'next';
import '@kittr/ui/styles.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { AppShell } from '@kittr/ui/new';
import { Nav } from '#/app/components/Nav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: "kittr's React UI Kit",
  title: 'React Kit - kittr',
};

export function RootLayout({
  children,
  pathname,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} bg-zinc-900`} lang="en">
      <body className="m-auto flex w-full flex-grow flex-row font-sans antialiased">
        <AppShell nav={<Nav />} pathnameForCloseHook={pathname}>
          <>{children}</>
        </AppShell>
      </body>
    </html>
  );
}
