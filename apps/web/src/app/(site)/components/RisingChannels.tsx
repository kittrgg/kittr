import { H2, CreatorList } from '@kittr/ui/new';
import Link from 'next/link';
import { getRisingCreators } from '@kittr/metrics';
import { download } from '@kittr/firebase/storage';
import { Suspense } from 'react';
import { prisma } from '@kittr/prisma';

export const RisingChannels = async () => {
  const risingCreators = await getRisingCreators({ limit: 20 });

  if (!risingCreators) {
    throw new Error('Errored fetching new rising creators.');
  }

  const creators = await prisma.channel.findMany({
    where: {
      id: {
        in: risingCreators.map((creator) => creator.id),
      },
      profile: {
        hasProfileImage: true,
      },
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <H2>Rising creators</H2>

      <Suspense>
        <CreatorList
          creators={creators.map((creator) => {
            return {
              name: creator.displayName,
              hasAvatar: true,
              urlSafeName: creator.urlSafeName,
              id: creator.id,
            };
          })}
          linkBasePath="/channel"
          linkComponent={Link}
        />
      </Suspense>
    </section>
  );
};
