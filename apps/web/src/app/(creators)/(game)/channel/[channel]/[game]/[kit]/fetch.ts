import { prisma } from '@kittr/prisma';
import { cache } from 'react';

export const getKits = cache(
  async ({
    game,
    channel,
    kit,
  }: {
    game: string;
    channel: string;
    kit: string;
  }) => {
    const kits =
      game === 'warzone'
        ? await prisma.warzoneKit.findMany({
            where: {
              channel: {
                urlSafeName: channel,
              },
              base: {
                displayName: decodeURI(kit),
              },
            },
            include: {
              base: { select: { displayName: true } },
            },
          })
        : await prisma.warzoneTwoKit.findMany({
            where: {
              channel: {
                urlSafeName: channel,
              },
              base: {
                displayName: decodeURI(kit),
              },
            },
            include: {
              base: { select: { displayName: true } },
            },
          });

    return kits;
  },
);
