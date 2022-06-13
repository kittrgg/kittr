import { createController } from "@Server/createController"
import * as GamesService from "@Server/services/games"
import { z } from "zod"

const listGames = createController().query("", {
	async resolve() {
		const result = await GamesService.getAllGames()
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
