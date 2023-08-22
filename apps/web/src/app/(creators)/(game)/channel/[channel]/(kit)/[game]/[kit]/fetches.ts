import { prisma } from '@kittr/prisma';
import { cache } from 'react';

export const getKit = cache(
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
              base: {
                select: {
                  displayName: true,
                  blurb: true,
                  imageUrl: true,
                  category: true,
                },
              },
              options: {
                select: { slotKey: true, displayName: true, id: true },
              },
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
              base: {
                select: {
                  displayName: true,
                  blurb: true,
                  imageUrl: true,
                  category: true,
                },
              },
              options: {
                select: {
                  slotKey: true,
                  displayName: true,
                  id: true,
                },
              },
              tuning: true,
            },
          });

    return kits;
  },
);

export type Kits = Awaited<ReturnType<typeof getKit>>;
