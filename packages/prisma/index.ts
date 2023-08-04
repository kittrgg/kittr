import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!(global as any).prisma) {
      (global as any).prisma = new PrismaClient();
    }

    prisma = (global as any).prisma;
  }
}

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
// @ts-ignore
export default prisma;

export * from '@prisma/client';
