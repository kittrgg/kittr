import { H2, ChannelList } from '@kittr/ui/new';
import { liveChannelsQuery } from '@kittr/twitch';
import Link from 'next/link';

export const LiveChannels = async () => {
  const channels = await liveChannelsQuery();

  return (
    <section className="flex flex-col gap-4">
      <H2>Live now</H2>
      <ChannelList
        channels={channels.map((channel) => {
          return {
            name: channel.displayName,
            urlSafeName: channel.urlSafeName,
            id: channel.id,
          };
        })}
        linkBasePath="/channel"
        linkComponent={Link}
      />
    </section>
  );
};
