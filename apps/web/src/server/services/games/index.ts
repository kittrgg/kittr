import { Prisma, prisma } from "@kittr/prisma"

export const getAllGames = async <T extends Prisma.GameInclude>(include: T) => {
	const game = await prisma.game.findMany({
		include
	})

	return game
}

export const getGameById = async (id: string) => {
	const game = await prisma.game.findFirst({
		where: {
			id
		}
	})
	return game
}

export const getGameByUrlSafeName = async (urlSafeName: string) => {
	const game = await prisma.game.findFirst({
		where: {
			urlSafeName
		}
	})
	return game
}
