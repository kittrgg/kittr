import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"
import { getAllGames } from "@Server/services/games"

export const gamesRouter = createRouter().merge("list", GamesController.listGames)
