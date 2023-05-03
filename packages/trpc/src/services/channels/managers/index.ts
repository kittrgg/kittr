import { getUserByEmail } from '../../users';
import admin from '@kittr/firebase/admin';
import { prisma, ChannelManager, ChannelManagerRoles } from '@kittr/prisma';

export const listManagers = async ({
  managers,
}: {
  managers: ChannelManager[];
}) => {
  // Get details from Firebase
  const managerDetails = managers.map(async (manager) => {
    return await admin.getUser(manager.firebaseId);
  });

  // Run fetches concurrently
  const listWithAuthData = await Promise.all(managerDetails);

  // Merge Firebase uid with
  const merged = managers.map((manager) => {
    const firebaseDetails = listWithAuthData.find(
      (m) => m.uid === manager.firebaseId,
    );

    return {
      ...manager,
      uid: firebaseDetails?.uid,
      email: firebaseDetails?.email,
    };
  });

  return merged;
};

export const createManager = async ({
  channelId,
  email,
  role,
}: {
  channelId: string;
  email: string;
  role: ChannelManagerRoles;
}) => {
  const newManager = await getUserByEmail(email);

  const channel = await prisma.channel.update({
    where: {
      id: channelId,
    },
    data: {
      managers: {
        create: {
          firebaseId: newManager.uid,
          role,
        },
      },
    },
  });

  return channel;
};

export const promoteManager = async ({
  channelId,
  managerIdToPromote,
}: {
  channelId: string;
  managerIdToPromote: string;
}) => {
  const channel = await prisma.channel.update({
    where: {
      id: channelId,
    },
    data: {
      managers: {
        update: {
          where: {
            id: managerIdToPromote,
          },
          data: {
            role: 'ADMIN',
          },
        },
      },
    },
  });

  return channel;
};

export const demoteManager = async ({
  channelId,
  managerIdToDemote,
}: {
  channelId: string;
  managerIdToDemote: string;
}) => {
  const channel = await prisma.channel.update({
    where: {
      id: channelId,
    },
    data: {
      managers: {
        update: {
          where: {
            id: managerIdToDemote,
          },
          data: {
            role: 'EDITOR',
          },
        },
      },
    },
  });

  return channel;
};

export const deleteManager = async ({
  channelId,
  managerIdToDelete,
}: {
  channelId: string;
  managerIdToDelete: string;
}) => {
  const channel = await prisma.channel.update({
    where: {
      id: channelId,
    },
    data: {
      managers: {
        delete: {
          id: managerIdToDelete,
        },
      },
    },
  });

  return channel;
};
