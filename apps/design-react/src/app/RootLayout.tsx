import type { Metadata } from 'next';
import '@kittr/ui/styles.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  AppShell,
  AppShellLinkItem,
  SidebarHeader,
  SidebarSeparator,
} from '@kittr/ui/new';
import { Code2, Library, Type } from '@kittr/ui/icons';
import Image from 'next/image';
import { componentEntries } from '#/componentMap';

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
        <AppShell
          nav={
            <>
              <Link
                className="flex flex-row items-center justify-center"
                href="/"
              >
                <Image
                  alt="kittr logo"
                  height={48}
                  src="/logo.svg"
                  width={89}
                />
              </Link>
              <SidebarSeparator />

              <SidebarHeader>Utilities</SidebarHeader>
              <AppShellLinkItem>
                <Link href="/icons">
                  <Library />
                  Icons
                </Link>
              </AppShellLinkItem>
              <AppShellLinkItem>
                <Link href="/typography">
                  <Type />
                  Typography
                </Link>
              </AppShellLinkItem>
              <SidebarSeparator />

              <SidebarHeader>Components</SidebarHeader>
              {componentEntries
                .filter(
                  ([_, component]) =>
                    !['Icons', 'Typography'].includes(component.name),
                )
                .map(([slug, component]) => {
                  return (
                    <AppShellLinkItem key={slug}>
                      <Link href={`/${slug}`}>
                        <Code2 />
                        {component.name}
                      </Link>
                    </AppShellLinkItem>
                  );
                })}
            </>
          }
          pathnameForCloseEffect={pathname}
        >
          <>{children}</>
        </AppShell>
      </body>
    </html>
  );
}
