import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@kittr/ui/new';
import { Sidebar } from './Sidebar';

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
      <body className="flex flex-col min-h-screen font-sans antialiased bg-background">
        <div className="p-4 border-b">
          Welcome to kittr&apos;s React UI library.
        </div>
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <main className="flex-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
