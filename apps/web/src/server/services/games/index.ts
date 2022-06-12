import { prisma } from "@kittr/prisma"

export const getAllGames = async () => {
	const games = await prisma.game.findMany()

	return games
}

export const getGame = async (id: string) => {
	const game = await prisma.game.findFirst({
		where: {
			id
		}
	})
	return game
}
