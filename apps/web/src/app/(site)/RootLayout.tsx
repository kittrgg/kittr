'use client';

import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Analytics } from '@kittr/analytics';
import { FooterImage, footerLinks } from '@/app/footer';
import { inter } from '@/app/fonts';

export function RootLayout({
  sideNav,
  children,
}: {
  sideNav: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800 ">
        <Analytics />
        <AppShell
          footerImage={<FooterImage />}
          footerLinks={footerLinks}
          linkComponent={Link}
          nav={sideNav}
          pathnameForCloseHook={pathname ?? ''}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
