import { H2, ChannelList } from '@kittr/ui/new';
import Link from 'next/link';
import { download } from '@kittr/firebase/storage';
import { Suspense } from 'react';
import { risingChannels } from '@/fetches/risingChannels';

export const RisingChannels = async () => {
  const channels = await risingChannels();

  const channelsWithImages = await Promise.all(
    channels.map(async (channel) => ({
      ...channel,
      image: await download(channel.id),
    })),
  );

  return (
    <section className="flex flex-col gap-4">
      <H2>Rising channels</H2>

      <Suspense>
        <ChannelList
          channels={channelsWithImages.map((channel) => {
            return {
              imageSrc: channel.image,
              name: channel.displayName,
              urlSafeName: channel.urlSafeName,
              id: channel.id,
            };
          })}
          linkBasePath="/channel"
          linkComponent={Link}
        />
      </Suspense>
    </section>
  );
};
