import type { ChannelCreatorCode } from "@kittr/prisma";
import { prisma } from "@kittr/prisma";

export const upsertCode = async ({
  codeUpdate,
}: {
  codeUpdate: Omit<ChannelCreatorCode, "id"> & { id?: string };
}) => {
  const { channelId, gameId, code } = codeUpdate;

  const update = {
    code,
    game: {
      connect: {
        id: gameId,
      },
    },
    channel: {
      connect: {
        id: channelId,
      },
    },
  };

  const gameCreatorCode = await prisma.channelCreatorCode.upsert({
    where: {
      id: codeUpdate.id ?? "",
    },
    update,
    create: update,
  });

  return gameCreatorCode;
};
