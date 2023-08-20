import { prisma } from '@kittr/prisma';

export const countChannels = async () => prisma.channel.count();
