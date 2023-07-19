'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AppShell } from '@kittr/ui/new';
import { usePathname } from 'next/navigation';
import { inter } from '../fonts';
import { MainSiteNav } from '@/app/(site)/MainSiteNav';
import { CreatorProfileNav } from '@/app/(site)/CreatorProfileNav';

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isCreatorProfile = pathname?.startsWith('/channel');

  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800 ">
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
            { href: '/about', children: 'About' },
            { href: '/games', children: 'Games' },
            { href: '/channels', children: 'Channels' },
            { href: '/faq', children: 'FAQ' },
            { href: '/contact', children: 'Contact' },
            { href: '/terms-of-use', children: 'Terms' },
            { href: '/privacy-policy', children: 'Privacy' },
          ]}
          nav={isCreatorProfile ? <CreatorProfileNav /> : <MainSiteNav />}
          pathnameForCloseHook={pathname ?? ''}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
