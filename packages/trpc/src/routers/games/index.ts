import { prisma } from "@kittr/prisma";
import { publicProcedure } from "../../initTRPC";

export const gamesCount = publicProcedure.query(async () =>
  prisma.game.findMany({ include: { _count: true } }),
);
