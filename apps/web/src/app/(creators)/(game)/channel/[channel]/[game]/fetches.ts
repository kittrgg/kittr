import { cache } from 'react';
import { prisma } from '@kittr/prisma';

export const getKitsByGame = cache(
  async ({ game, channelName }: { game: string; channelName: string }) => {
    return game === 'warzone'
      ? prisma.warzoneKit.findMany({
          where: {
            channel: {
              urlSafeName: channelName,
            },
          },
          include: {
            base: true,
          },
        })
      : prisma.warzoneTwoKit.findMany({
          where: {
            channel: {
              urlSafeName: channelName,
            },
          },
          include: {
            base: true,
          },
        });
  },
);
