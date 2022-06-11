import { createController } from "@Server/createController"
import { getAllGames } from "@Server/services/games"
import superjson from "superjson"

const listGames = createController().query("", {
	async resolve() {
		const result = await getAllGames()
		return result
	}
})

export const GamesController = {
	listGames
}