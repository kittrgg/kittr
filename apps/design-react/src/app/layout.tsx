import type { Metadata } from 'next';
import '@kittr/ui/styles.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { AppShellLinkItem } from './LinkItem';
import { componentEntries } from '#/componentMap';
import { SidebarSeparator } from '#/app/Separator';

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
      <body className="m-auto flex min-h-screen flex-grow flex-row font-sans antialiased">
        <aside className="dark left-0 top-0 z-40 h-screen -translate-x-full transition-transform sm:translate-x-0">
          <div className="flex h-full w-60 flex-none flex-col gap-4 overflow-y-auto bg-gray-50 p-4 dark:bg-zinc-800">
            <AppShellLinkItem component={<Link href="/">Home</Link>} />
            <SidebarSeparator />
            {componentEntries.map(([slug, component]) => {
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
        </aside>
        <main className="container flex-auto p-8">{children}</main>
      </body>
    </html>
  );
}
