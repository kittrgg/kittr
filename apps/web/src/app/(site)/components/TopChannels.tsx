import { H2, CreatorList } from '@kittr/ui/new';
import { prisma } from '@kittr/prisma';
import Link from 'next/link';
import { download } from '@kittr/firebase/storage';
import { Suspense } from 'react';
import { getTopCreatorPopularities } from '@kittr/metrics';

export const TopChannels = async () => {
  const popularities = await getTopCreatorPopularities({ limit: 10 });

  if (!popularities) {
    throw new Error('Issue querying Axiom for home page.');
  }

  const channelsRaw = await prisma.channel.findMany({
    where: {
      id: {
        in: popularities.map((p) => p.id),
      },
      profile: {
        hasProfileImage: true,
      },
    },
    take: 10,
    include: {
      profile: true,
      links: true,
    },
  });

  const channelsWithImagesAndPopularity = await Promise.all(
    channelsRaw.map(async (channel) => ({
      ...channel,
      image: await download(channel.id),
      // We know these channels will be found because the Prisma query uses `in`
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      viewCount: popularities.find((pop) => pop.id === channel.id)!
        .pageViewCount,
    })),
  );

  const creators = channelsWithImagesAndPopularity.sort((a, b) => {
    return b.viewCount - a.viewCount;
  });

  return (
    <section className="flex flex-col gap-4">
      <H2>Top creators</H2>
      <Suspense>
        <CreatorList
          creators={creators.map((channel) => {
            return {
              imageSrc: channel.image,
              name: channel.displayName,
              hasAvatar: channel.profile?.hasProfileImage ?? false,
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
