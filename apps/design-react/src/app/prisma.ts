import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['info'] });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

// export * from '@kittr/prisma'
