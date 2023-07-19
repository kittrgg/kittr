import { LayoutGrid, Users, Gamepad } from '@kittr/ui/icons';
import { AppShellLinkItem, Button, SidebarSeparator } from '@kittr/ui/new';
import Link from 'next/link';
import Image from 'next/image';
import { getChannel } from '@/fetches/getChannel';

export async function CreatorProfileNav({
  creatorUrlSafeName,
}: {
  creatorUrlSafeName: string;
}) {
  // const channel = await getChannel(creatorUrlSafeName);
  // console.log(channel);

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
          Games
        </Link>
      </AppShellLinkItem>
      <AppShellLinkItem>
        <Link href="/channels">
          <Users />
          Channels
        </Link>
      </AppShellLinkItem>

      <SidebarSeparator />

      {/* {channel?.games.map((game) => {
        return (
          <Button asChild key={game.urlSafeName}>
            <Link href={`/channel/${creatorUrlSafeName}/${game.urlSafeName}`}>
              {game.displayName}
            </Link>
          </Button>
        );
      })} */}
    </>
  );
}
