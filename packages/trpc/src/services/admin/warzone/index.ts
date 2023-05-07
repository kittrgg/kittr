/* eslint-disable @typescript-eslint/no-unused-vars */
import type { WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma";
import { prisma } from "@kittr/prisma";

export const listKitBases = async () => {
  const result = await prisma.warzoneKitBase.findMany({
    include: {
      availableOptions: true,
    },
  });

  return result;
};

export const getKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
  const result = await prisma.warzoneKitBase.findFirst({
    where: {
      id: kitBaseId,
    },
    include: {
      availableOptions: true,
    },
  });

  return result;
};

export const listKitBaseCategories = async () => {
  const result = await prisma.warzoneKitBaseCategory.findMany({});

  return result;
};

export const createKitBase = async ({
  base,
  commandCodes,
}: {
  base: Omit<WarzoneKitBase, "id">;
  commandCodes: string[];
}) => {
  const result = await prisma.warzoneKitBase.create({
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
}: // CategoryId,
// CommandCodes,
//  Options
{
  base: WarzoneKitBase;
  // CategoryId: string,
  // CommandCodes: WarzoneCommandCode[]
  // Options: WarzoneKitOption[]
}) => {
  const {
    id,
    // CategoryId: removeCatId,
    //  GameId: removeGameId,
    ...data
  } = base;

  const result = await prisma.warzoneKitBase.update({
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
      // CommandCodes: {
      // 	ConnectOrCreate: commandCodes.map(code => ({ create: code, where: code }))
      // },
      // AvailableOptions: {
      // 	ConnectOrCreate: options.map(option => ({ create: option, where: option }))
      // },
    },
  });

  return result;
};

export const deleteKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
  const result = prisma.warzoneKitBase.delete({
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
  options: WarzoneKitOption[];
}) => {
  const result = await prisma.warzoneKitBase.update({
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
  option: Omit<WarzoneKitOption, "id">;
}) => {
  const { kitBaseId, ...rest } = option;

  const result = await prisma.warzoneKitOption.create({
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

export const updateOption = async (option: WarzoneKitOption) => {
  const { id, ...rest } = option;

  const result = await prisma.warzoneKitOption.update({
    where: {
      id: option.id,
    },
    data: rest,
  });

  return result;
};

export const deleteOption = async (optionId: string) => {
  const result = await prisma.warzoneKitOption.delete({
    where: {
      id: optionId,
    },
  });

  return result;
};
