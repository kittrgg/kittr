import { H2, ChannelList } from '@kittr/ui/new';
import { prisma } from '@kittr/prisma';
import Link from 'next/link';

export const TopChannels = async () => {
  const result = await prisma.channel.findMany({
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

  return (
    <section className="flex flex-col gap-4">
      <H2>Top channels</H2>
      <ChannelList
        channels={result.map((channel) => {
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
