import { H2, ChannelList } from '@kittr/ui/new';
import { liveChannelsQuery } from '@kittr/twitch';
import Link from 'next/link';
import { download } from '@kittr/firebase/storage';
import { Suspense } from 'react';

export const LiveChannels = async () => {
  const channels = await liveChannelsQuery();

  if (channels.length === 0) return null;

  const channelsWithImages = await Promise.all(
    channels.map(async (channel) => ({
      ...channel,
      image: await download(channel.id),
    })),
  );

  return (
    <section className="flex flex-col gap-4">
      <H2>Live now</H2>

      <Suspense>
        <ChannelList
          channels={channelsWithImages.map((channel) => {
            return {
              name: channel.displayName,
              urlSafeName: channel.urlSafeName,
              id: channel.id,
              imageSrc: channel.image,
            };
          })}
          linkBasePath="/channel"
          linkComponent={Link}
        />
      </Suspense>
    </section>
  );
};
