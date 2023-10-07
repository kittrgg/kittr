import { prisma } from '@kittr/prisma';

export const listGames = async () => {
	const games = await prisma.game.findMany({
		include: {
			platforms: true,
			genres: true,
		},
	});

	return games;
};

export const getGameDisplayNameFromUrlSafeName = (urlSafeName: string) =>
	prisma.game.findFirstOrThrow({ where: { urlSafeName } });
