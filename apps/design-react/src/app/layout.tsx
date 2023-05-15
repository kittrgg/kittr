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
import { Code2, Library, Type, Home } from '@kittr/ui/icons';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="m-auto flex h-screen w-full flex-grow flex-row font-sans antialiased">
        <AppShell
          logoImageAlt="kittr logo"
          logoImagePath="/logo.svg"
          nav={
            <>
              <AppShellLinkItem icon={<Home />}>
                <Link href="/">Home</Link>
              </AppShellLinkItem>
              <SidebarSeparator />

              <SidebarHeader>Utilities</SidebarHeader>
              <AppShellLinkItem icon={<Library />}>
                <Link href="/icons">Icons</Link>
              </AppShellLinkItem>
              <AppShellLinkItem icon={<Type />}>
                <Link href="/typography">Typography</Link>
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
                    <AppShellLinkItem icon={<Code2 />} key={slug}>
                      <Link href={`/${slug}`}>{component.name}</Link>
                    </AppShellLinkItem>
                  );
                })}
            </>
          }
        >
          <>{children}</>
        </AppShell>
      </body>
    </html>
  );
}
