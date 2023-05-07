import { prisma } from '@kittr/prisma';

export const getCommandString = async ({
  channelId,
}: {
  channelId: string;
}) => {
  const commandString = await prisma.channelCustomGameCommand.findFirst({
    where: {
      id: channelId,
    },
    select: {
      command: true,
    },
  });

  return commandString;
};

export const upsertCommandString = async ({
  gameId,
  newString,
  channelId,
  commandStringId,
}: {
  gameId: string;
  newString: string;
  channelId: string;
  commandStringId?: string;
}) => {
  const commandString = await prisma.channelCustomGameCommand.upsert({
    where: {
      id: commandStringId ?? '',
    },
    create: {
      command: newString,
      channel: {
        connect: {
          id: channelId,
        },
      },
      game: {
        connect: {
          id: gameId,
        },
      },
    },
    update: {
      command: newString,
    },
    select: {
      command: true,
    },
  });

  return commandString;
};
