import { prisma } from "@kittr/prisma";
import { getUserByEmail } from "../../../users";

export const editOwner = async ({
  channelId,
  previousOwnerId,
  newOwnerEmail,
}: {
  channelId: string;
  previousOwnerId: string;
  newOwnerEmail: string;
}) => {
  const newOwnerFirebaseId = await getUserByEmail(newOwnerEmail).then(
    (user) => user.uid,
  );

  /** This is not a Firebase id! This is the id of the record in the database. */
  const newOwnerId = await prisma.channelManager.findFirst({
    where: { channel: { id: channelId }, firebaseId: newOwnerFirebaseId },
    select: {
      id: true,
    },
  });

  const channel = await prisma.channel.update({
    where: { id: channelId },
    data: {
      managers: {
        update: [
          {
            where: {
              id: previousOwnerId,
            },
            data: {
              role: "ADMIN",
            },
          },
          {
            where: {
              id: newOwnerId?.id,
            },
            data: {
              role: "OWNER",
            },
          },
        ],
      },
    },
  });

  return channel;
};
