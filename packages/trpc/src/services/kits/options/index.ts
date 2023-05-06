import { prisma } from '@kittr/prisma';

export const list = async ({ kitBaseId }: { kitBaseId: string }) => {
  const result = await prisma.warzoneKitOption.findMany({
    where: {
      kitBaseId,
    },
  });

  const wz2Result = await prisma.warzoneTwoKitOption.findMany({
    where: {
      kitBaseId,
    },
  });

  // TODO: Relation with services/kits/bases, needs to be changed to add more games.
  if (!wz2Result[0]) return result;
  return wz2Result;
};
