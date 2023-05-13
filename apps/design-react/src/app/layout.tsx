import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
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
      <body className="bg-background flex min-h-screen flex-col font-sans antialiased">
        <div className="border-b p-4">
          Welcome to kittr&apos;s React UI library.
        </div>
        <div className="flex flex-grow flex-row">
          <Sidebar />
          <main className="flex-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
