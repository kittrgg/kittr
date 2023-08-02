import { AppShellLinkItem } from '@kittr/ui/new';
import Link from 'next/link';
import { getChannel } from '@/fetches/getChannel';

export async function SidebarContent({
  creatorUrlSafeName,
}: {
  creatorUrlSafeName: string;
}) {
  // return null;
  const channel = await getChannel(creatorUrlSafeName);

  return channel?.games.map((game) => {
    return (
      <AppShellLinkItem key={game.urlSafeName}>
        <Link href={`/channel/${creatorUrlSafeName}/${game.urlSafeName}`}>
          {game.displayName}
        </Link>
      </AppShellLinkItem>
    );
  });
}
