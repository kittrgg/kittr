import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import { AppShellLinkItem, SidebarSeparator } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import type { Params } from '@/app/(creators)/channel/[channel]/params';
import { getChannel } from '@/fetches/getChannel';

export const revalidate = 10;

export async function Sidebar({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

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

      {channel?.games.map((game) => {
        return (
          <AppShellLinkItem key={game.urlSafeName}>
            <Link href={`/channel/${params.channel}/${game.urlSafeName}`}>
              {game.displayName}
            </Link>
          </AppShellLinkItem>
        );
      })}
    </>
  );
}

export default Sidebar;
