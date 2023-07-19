import { cache } from 'react';
import { prisma } from '@kittr/prisma';

export const getChannel = async (urlSafeName: string) => {
  const channel = await prisma.channel.findUnique({
    where: {
      urlSafeName,
    },
    include: {
      profile: {
        include: {
          brandColors: true,
          channelPcSpecs: true,
          affiliates: true,
          setupPhotos: true,
        },
      },
      links: true,
      plan: true,
      games: {
        select: {
          backgroundImageUrl: true,
          titleImageUrl: true,
          displayName: true,
          urlSafeName: true,
        },
      },
    },
  });

  return channel;
};
