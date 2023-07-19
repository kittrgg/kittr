'use client';

import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CreatorProfileNav } from './CreatorProfileNav';
import { getChannel } from '@/fetches/getChannel';

export async function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // const creator = await getChannel(params.channel);

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
      // nav={<CreatorProfileNav creator={creator} />}
      nav={<></>}
      pathnameForCloseHook={pathname ?? ''}
    >
      {children}
    </AppShell>
  );
}
