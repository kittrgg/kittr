'use client';

import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { SideNav } from '@/app/(creators)/channel/[channel]/components/SideNav';
import { SidebarContent } from '@/app/(creators)/channel/[channel]/components/SidebarContent';
import { FooterImage, footerLinks } from '@/app/footer';

export function LayoutWrapper({
  children,
  creatorUrlSafeName,
}: {
  children: ReactNode;
  creatorUrlSafeName: string;
}) {
  const pathname = usePathname();

  return (
    <AppShell
      footerImage={<FooterImage />}
      footerLinks={footerLinks}
      linkComponent={Link}
      nav={
        <SideNav creatorUrlSafeName={creatorUrlSafeName}>
          <SidebarContent creatorUrlSafeName={creatorUrlSafeName} />
        </SideNav>
      }
      pathnameForCloseHook={pathname ?? ''}
    >
      {children}
    </AppShell>
  );
}
