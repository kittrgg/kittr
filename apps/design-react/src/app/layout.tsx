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
      <body className="flex flex-row flex-grow w-full h-screen m-auto font-sans antialiased">
        <AppShell
          nav={
            <div className="flex flex-col flex-none h-full gap-4 p-4 overflow-y-auto w-60 bg-gray-50 dark:bg-zinc-800">
              <AppShellLinkItem component={<Link href="/">Home</Link>} />
              <SidebarSeparator />
              <SidebarHeader>Utilities</SidebarHeader>
              <AppShellLinkItem component={<Link href="/icons">Icons</Link>} />
              <AppShellLinkItem
                component={<Link href="/typography">Typography</Link>}
              />
              <SidebarSeparator />
              <SidebarHeader>Components</SidebarHeader>
              {componentEntries
                .filter(
                  ([_, component]) =>
                    !['Icons', 'Typography'].includes(component.name),
                )
                .map(([slug, component]) => {
                  return (
                    <AppShellLinkItem
                      component={
                        <Link href={`/${slug}`}>
                          {'<'}
                          {component.name}
                          {' />'}
                        </Link>
                      }
                      key={component.name}
                    />
                  );
                })}
            </div>
          }
        >
          <>{children}</>
        </AppShell>
      </body>
    </html>
  );
}
