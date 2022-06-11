import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"

export const gamesRouter = createRouter()
	.query("test", {
		async resolve() {
			return ""
		}
	})
	.merge("list", GamesController.listGames)
