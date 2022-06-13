import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"

export const gamesRouter = createRouter()
	.merge("getByUrlSafeName", GamesController.getGameByUrlSafeName)
	.merge("getById", GamesController.getGameById)
	.merge("list", GamesController.listGames)
