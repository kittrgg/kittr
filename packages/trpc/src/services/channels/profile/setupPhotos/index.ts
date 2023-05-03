import { prisma } from '@kittr/prisma';

export const updateSetupPhotos = async ({
  slot,
  bool,
  channelId,
  channelProfileId,
}: {
  slot: number;
  bool: boolean;
  channelId: string;
  channelProfileId: string;
}) => {
  const result = await prisma.channelProfile.update({
    where: { channelId },
    data: {
      setupPhotos: {
        upsert: {
          where: {
            channelProfileId_slot: {
              channelProfileId,
              slot,
            },
          },
          create: {
            slot,
            exists: bool,
          },
          update: {
            slot,
            exists: bool,
          },
        },
      },
    },
  });

  return result;
};
