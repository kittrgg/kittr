import {
  AppShellLinkItem,
  SidebarSeparator,
  SidebarHeader,
} from '@kittr/ui/new';
import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
  return (
    <>
      <AppShellLinkItem className="m-0 flex flex-row items-center justify-center">
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
      <SidebarSeparator />

      <SidebarHeader>Profile</SidebarHeader>
      <AppShellLinkItem>
        <Link href="/dashboard">
          <LayoutGrid />
          Dashboard
        </Link>
      </AppShellLinkItem>
      <SidebarSeparator />

      {/* <SidebarHeader>Components</SidebarHeader> */}

      <AppShellLinkItem>
        <Link href="/games">
          <Gamepad />
          Games
        </Link>
      </AppShellLinkItem>
      <AppShellLinkItem>
        <Link href="/channels">
          <Users />
          Channels
        </Link>
      </AppShellLinkItem>
    </>
  );
}
