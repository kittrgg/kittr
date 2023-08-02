import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import { AppShellLinkItem, SidebarSeparator } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { SidebarContent } from '@/app/(creators)/channel/[channel]/components/SidebarContent';

export function SideNav({
  creatorUrlSafeName,
}: {
  creatorUrlSafeName: string;
}) {
  return (
    <>
      <AppShellLinkItem className="flex flex-row items-center justify-center m-0">
        <Link className="flex flex-row items-center justify-center" href="/">
          <Image
            alt="kittr logo"
            height={48}
            priority
            src="/img/logo.svg"
            width={89}
          />
        </Link>
      </AppShellLinkItem>

      <AppShellLinkItem>
        <Link href="/dashboard">
          <LayoutGrid />
          Dashboard
        </Link>
      </AppShellLinkItem>

      <AppShellLinkItem>
        <Link href="/games">
          <Gamepad />
          All games
        </Link>
      </AppShellLinkItem>
      <AppShellLinkItem>
        <Link href="/channels">
          <Users />
          All channels
        </Link>
      </AppShellLinkItem>

      <SidebarSeparator />

      <Suspense fallback="Loading...">
        <SidebarContent creatorUrlSafeName={creatorUrlSafeName} />
      </Suspense>
    </>
  );
}
