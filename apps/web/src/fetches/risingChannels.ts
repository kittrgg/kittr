import { prisma } from '@kittr/prisma';

export const risingChannels = async () => {
  const where = {
    profile: {
      hasProfileImage: true,
    },
    viewCount: {
      gte: 200,
    },
  };

  const channelCount = await prisma.channel.count({
    where,
  });

  const skip = 10;
  const randomSkip = Math.min(
    channelCount - skip,
    Math.max(skip, Math.floor(Math.random() * channelCount)),
  );

  const result = await prisma.channel.findMany({
    orderBy: {
      viewCount: 'desc',
    },
    where,
    skip: Math.max(0, randomSkip),
    take: 10,
    include: {
      profile: true,
    },
  });

  return result;
};
