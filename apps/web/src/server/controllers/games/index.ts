import { createController } from "@Server/createController"
import * as GamesService from "@Server/services/games"
import { z } from "zod"

const listGames = createController().query("", {
	input: z.object({
		_count: z.boolean().optional(),
		genres: z.boolean().optional(),
		platforms: z.boolean().optional(),
		kitBases: z.boolean().optional(),
		channels: z.boolean().optional(),
		channelAffiliateCodes: z.boolean().optional(),
		customCommandStrings: z.boolean().optional(),
		kits: z.boolean().optional(),
		kitOptions: z.boolean().optional()
	}),
	async resolve({ input }) {
		const result = await GamesService.getAllGames(input)

		return result
	}
})

const getGameByUrlSafeName = createController().query("", {
	input: z.string(),
	async resolve({ input: urlSafeName }) {
		const game = await GamesService.getGameByUrlSafeName(urlSafeName)
		return game
	}
})

const getGameById = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const game = await GamesService.getGameById(id)
		return game
	}
})

export const GamesController = {
	listGames,
	getGameByUrlSafeName,
	getGameById
}
