import { prisma } from "@kittr/prisma"

export const getAllGames = async () => {
	const games = await prisma.game.findMany()

	return games
}
