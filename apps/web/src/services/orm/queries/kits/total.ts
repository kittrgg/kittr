import { prisma } from '@kittr/prisma';

export const getTotalKitsQuery = async (): Promise<number> => {
	return await prisma.warzoneKit.count();
};
