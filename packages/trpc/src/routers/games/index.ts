import { publicProcedure } from '../../initTRPC';
import { prisma } from '@kittr/prisma';

export const gamesCount = publicProcedure.query(async () =>
  prisma.game.findMany({ include: { _count: true } }),
);
