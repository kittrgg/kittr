import type { Metadata } from 'next';
import Image from 'next/image';
import '@kittr/ui/styles.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
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
      <body className="flex flex-row flex-grow w-full m-auto font-sans antialiased">
        <AppShell
          footerImage={
            <Link
              className="flex flex-row items-center justify-center"
              href="/"
            >
              <Image alt="kittr logo" height={48} src="/logo.svg" width={89} />
            </Link>
          }
          linkComponent={Link}
          links={[
            { href: '/', children: 'Home' },
            { href: '/test', children: 'About' },
            { href: '/test', children: 'Games' },
            { href: '/test', children: 'Channels' },
            { href: '/test', children: 'FAQ' },
            { href: '/test', children: 'Contact' },
            { href: '/test', children: 'Terms' },
            { href: '/test', children: 'Privacy' },
          ]}
          nav={<Nav />}
          pathnameForCloseHook={pathname}
        >
          <>{children}</>
        </AppShell>
      </body>
    </html>
  );
}
