import type { WarzoneTwoKitBase, WarzoneTwoKitOption } from '@kittr/prisma';
import { prisma } from '@kittr/prisma';

export const listKitBases = async () => {
  const result = await prisma.warzoneTwoKitBase.findMany({
    include: {
      availableOptions: true,
      commandCodes: true,
    },
  });

  return result;
};

export const getKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
  const result = await prisma.warzoneTwoKitBase.findFirst({
    where: {
      id: kitBaseId,
    },
    include: {
      availableOptions: true,
      commandCodes: true,
    },
  });

  return {
    ...result,
    commandCodes: result?.commandCodes.map((el) => el.code).join(','),
  };
};

export const listKitBaseCategories = async () => {
  const result = await prisma.warzoneTwoKitBaseCategory.findMany({});

  return result;
};

export const createKitBase = async ({
  base,
  commandCodes,
}: {
  base: Omit<WarzoneTwoKitBase, 'id'>;
  commandCodes: string[];
}) => {
  const result = await prisma.warzoneTwoKitBase.create({
    data: {
      ...base,
      commandCodes: {
        create: commandCodes.map((code) => ({ code })),
      },
    },
  });

  return result;
};

export const updateKitBase = async ({
  base,
  commandCodes,
}: {
  base: WarzoneTwoKitBase;
  // CategoryId: string,
  commandCodes: string[] | null;
  // Options: WarzoneKitOption[]
}) => {
  const {
    id,
    // CategoryId: removeCatId,
    //  GameId: removeGameId,
    ...data
  } = base;

  await prisma.warzoneTwoCommandCode.deleteMany({
    where: {
      AND: [{ kitBaseId: base.id }],
    },
  });

  const result = await prisma.warzoneTwoKitBase.update({
    where: {
      id,
    },
    data: {
      ...data,
      // Category: {
      // 	Connect: {
      // 		Id: categoryId
      // 	}
      // },
      commandCodes: {
        create: commandCodes?.map((el) => ({ code: el })),
      },
      // AvailableOptions: {
      // 	ConnectOrCreate: options.map(option => ({ create: option, where: option }))
      // },
    },
  });

  return result;
};

export const deleteKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
  const result = prisma.warzoneTwoKitBase.delete({
    where: {
      id: kitBaseId,
    },
  });

  return result;
};

export const updateOptionsForBase = async ({
  baseId,
  options,
}: {
  baseId: string;
  options: WarzoneTwoKitOption[];
}) => {
  const result = await prisma.warzoneTwoKitBase.update({
    where: {
      id: baseId,
    },
    data: {
      availableOptions: {
        connectOrCreate: options.map((opt) => ({
          where: {
            id: opt.id,
          },
          create: opt,
        })),
      },
    },
  });

  return result;
};

export const createOption = async ({
  baseId,
  option,
}: {
  baseId: string;
  option: Omit<WarzoneTwoKitOption, 'id'>;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { kitBaseId, ...rest } = option;

  const result = await prisma.warzoneTwoKitOption.create({
    data: {
      ...rest,
      kitBase: {
        connect: {
          id: baseId,
        },
      },
    },
  });

  return result;
};

export const updateOption = async (option: WarzoneTwoKitOption) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = option;

  const result = await prisma.warzoneTwoKitOption.update({
    where: {
      id: option.id,
    },
    data: rest,
  });

  return result;
};

export const deleteOption = async (optionId: string) => {
  const result = await prisma.warzoneTwoKitOption.delete({
    where: {
      id: optionId,
    },
  });

  return result;
};
