import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"

export const gamesRouter = createRouter().merge("list", GamesController.listGames)
