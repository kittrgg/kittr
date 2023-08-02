'use client';

import type { ReactNode } from 'react';
import { AppShell } from '@kittr/ui/new';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FooterImage, footerLinks } from '@/app/footer';

export function AppWrapper({
  sidebar,
  body,
}: {
  sidebar: ReactNode;
  body: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AppShell
      footerImage={<FooterImage />}
      footerLinks={footerLinks}
      linkComponent={Link}
      nav={sidebar}
      pathnameForCloseHook={pathname ?? ''}
    >
      {body}
    </AppShell>
  );
}
