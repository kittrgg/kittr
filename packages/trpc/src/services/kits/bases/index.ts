import type { Prisma } from '@kittr/prisma';
import { prisma } from '@kittr/prisma';

export const listBases = async <T extends Prisma.WarzoneKitBaseInclude>(
	include: T,
) => {
	const bases = await prisma.warzoneKitBase.findMany({ include });
	// @ts-expect-error This is valid because the models are clones of each other.
	// However, Prisma will (rightly) complain because the include type is using the wrong model.
	const wz2Bases = await prisma.warzoneTwoKitBase.findMany({ include });
	// TODO: This needs to be fixed when more games are added.
	if (!wz2Bases[0]) return bases;
	return wz2Bases;
};

export const listGameBases = async (gameId: string) => {
	const bases = await prisma.warzoneKitBase.findMany({
		where: {
			gameId,
		},
	});
	const wz2Bases = await prisma.warzoneTwoKitBase.findMany({
		where: {
			gameId,
		},
	});
	// TODO: This needs to be fixed when more games are added.
	if (!wz2Bases[0]) return bases;
	return wz2Bases;
};
