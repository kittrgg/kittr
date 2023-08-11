import 'server-only';

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

export const getShopCode = cache(
  async ({
    channelUrlSafeName,
    gameUrlSafeName,
  }: {
    channelUrlSafeName: string;
    gameUrlSafeName: string;
  }) => {
    return prisma.channelCreatorCode.findFirst({
      where: {
        channel: {
          urlSafeName: channelUrlSafeName,
        },
        game: {
          urlSafeName: gameUrlSafeName,
        },
      },
    });
  },
);
