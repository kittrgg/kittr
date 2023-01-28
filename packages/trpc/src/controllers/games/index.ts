import { publicProcedure } from "../../initTRPC"
import * as GamesService from "../../services/games"
import { prisma } from "@kittr/prisma"
import { z } from "zod"

const listGames = publicProcedure.query(async () => {
	const game = await prisma.game.findMany({
		include: {
			genres: true,
			platforms: true
		}
	})

	return game
})

const getGameByUrlSafeName = publicProcedure
	.input(z.string())
	.query(async ({ input: urlSafeName }) => {
		const game = await GamesService.getGameByUrlSafeName(urlSafeName)
		return game
	})

const getGameById = publicProcedure
	.input(z.string())
	.query(async ({ input: id }) => {
		const game = await GamesService.getGameById(id)
		return game
	})

export const GamesController = {
	listGames,
	getGameByUrlSafeName,
	getGameById
}
