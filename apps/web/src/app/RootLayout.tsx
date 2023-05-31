import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import { Nav } from '@/app/Nav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: 'Get kittd.',
  title: 'kittr',
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
        <AppShell
          footerImage={
            <Link
              className="flex flex-row items-center justify-center"
              href="/"
            >
              <Image
                alt="kittr logo"
                height={48}
                src="/media/logo.svg"
                width={89}
              />
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
          {children}
        </AppShell>
      </body>
    </html>
  );
}
