import { grabLoginName, getTwitchLink } from '@kittr/twitch';
import { Avatar, H1 } from '@kittr/ui/new';
import Link from 'next/link';
import { getChannel } from '@/fetches/getChannel';
import { getCreatorLiveStatus } from '@/fetches/getCreatorLiveStatus';

export async function Header({
  channelUrlSafeName,
}: {
  channelUrlSafeName: string;
}) {
  const channel = await getChannel(channelUrlSafeName);

  if (!channel) return null;

  const twitchLink = grabLoginName(getTwitchLink(channel));
  const liveStatus = await getCreatorLiveStatus({ twitchUsername: twitchLink });

  return (
    <Link
      className="z-10 flex flex-row items-center gap-4 position w-fit"
      href={`/channel/${channelUrlSafeName}`}
    >
      <Avatar
        hasProfileImg={channel.profile?.hasProfileImage}
        id={channel.id}
        isLive={liveStatus}
        username={channel.displayName}
      />
      <H1 preset="h3">{channel.displayName}</H1>
    </Link>
  );
}
