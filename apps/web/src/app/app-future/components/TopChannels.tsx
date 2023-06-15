import { H2, ChannelList } from '@kittr/ui/new';
import { prisma } from '@kittr/prisma';
import Link from 'next/link';
import { download } from '@kittr/firebase/storage';
import { Suspense } from 'react';

export const TopChannels = async () => {
  const channels = await prisma.channel.findMany({
    where: {
      profile: {
        hasProfileImage: true,
      },
    },
    orderBy: {
      viewCount: 'desc',
    },
    take: 10,
    include: {
      profile: true,
      links: true,
    },
  });

  const channelsWithImages = await Promise.all(
    channels.map(async (channel) => ({
      ...channel,
      image: await download(channel.id),
    })),
  );

  return (
    <section className="flex flex-col gap-4">
      <H2>Top channels</H2>
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
