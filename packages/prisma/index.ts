import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ log: ['info', 'error'] });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export { prisma };
export * from '@prisma/client';
