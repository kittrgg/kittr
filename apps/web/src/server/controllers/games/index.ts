import { publicProcedure } from "@Server/index"
import * as GamesService from "@Server/services/games"
import { z } from "zod"

const listGames = publicProcedure
	.input(
		z.object({
			_count: z.boolean().optional(),
			genres: z.boolean().optional(),
			platforms: z.boolean().optional(),
			kitBases: z.boolean().optional(),
			channels: z.boolean().optional(),
			channelAffiliateCodes: z.boolean().optional(),
			customCommandStrings: z.boolean().optional(),
			kits: z.boolean().optional(),
			kitOptions: z.boolean().optional()
		})
	)
	.query(async ({ input }) => {
		const result = await GamesService.getAllGames(input)
		return result
	})

const getGameByUrlSafeName = publicProcedure.input(z.string()).query(async ({ input: urlSafeName }) => {
	const game = await GamesService.getGameByUrlSafeName(urlSafeName)
	return game
})

const getGameById = publicProcedure.input(z.string()).query(async ({ input: id }) => {
	const game = await GamesService.getGameById(id)
	return game
})

export const GamesController = {
	listGames,
	getGameByUrlSafeName,
	getGameById
}
