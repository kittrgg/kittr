'use client';

import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CreatorProfileNav } from './CreatorProfileNav';

export async function LayoutWrapper({
  children,
  params,
}: {
  children: ReactNode;
  params: { channel: string };
}) {
  const pathname = usePathname();

  return (
    <AppShell
      footerImage={
        <Link className="flex flex-row items-center justify-center" href="/">
          <Image
            alt="kittr logo"
            height={48}
            src="/media/logo.svg"
            width={89}
          />
        </Link>
      }
      footerLinks={[
        { href: '/', children: 'Home' },
        { href: '/about', children: 'About' },
        { href: '/games', children: 'Games' },
        { href: '/channels', children: 'Channels' },
        { href: '/faq', children: 'FAQ' },
        { href: '/contact', children: 'Contact' },
        { href: '/terms-of-use', children: 'Terms' },
        { href: '/privacy-policy', children: 'Privacy' },
      ]}
      linkComponent={Link}
      nav={<CreatorProfileNav creatorUrlSafeName={params.channel} />}
      // nav={<></>}
      pathnameForCloseHook={pathname ?? ''}
    >
      {children}
    </AppShell>
  );
}
