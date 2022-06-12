import { createController } from "@Server/createController"
import * as GamesService from "@Server/services/games"
import { z } from "zod"

const listGames = createController().query("", {
	async resolve() {
		const result = await GamesService.getAllGames()
		return result
	}
})

const getGame = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const game = await GamesService.getGame(id)
		return game
	}
})

export const GamesController = {
	listGames,
	getGame
}
