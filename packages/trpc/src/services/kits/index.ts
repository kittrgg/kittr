import { prisma } from "@kittr/prisma";

export const countKits = async () => {
  const total = await prisma.warzoneKit.count();

  return total;
};
