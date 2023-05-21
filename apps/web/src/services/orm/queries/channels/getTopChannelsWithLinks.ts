import type { Prisma } from '@kittr/prisma';
import { prisma } from '@kittr/prisma';

interface Params {
  take: number;
}

export const getTopChannelsWithLinksQuery = async ({ take }: Params) => {
  const result = await prisma.channel.findMany({
    where: {
      profile: {
        hasProfileImage:
          process.env.VERCEL_ENV === 'development' ? undefined : true,
      },
    },
    orderBy: {
      viewCount: 'desc',
    },
    take,
    include: {
      links: true,
      profile: {
        select: {
          hasProfileImage: true,
        },
      },
    },
  });

  return result;
};

export type getTopChannelsWithLinksQueryReturnType = Prisma.PromiseReturnType<
  typeof getTopChannelsWithLinksQuery
>;
