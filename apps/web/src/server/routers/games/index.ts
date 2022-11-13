import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"
import { GameModel, GenreModel, PlatformModel } from "@kittr/prisma/validator"
import { z } from "zod"

export const gamesRouter = createRouter()
	.merge("getByUrlSafeName", GamesController.getGameByUrlSafeName)
	.merge("getById", GamesController.getGameById)
	.merge("list", GamesController.listGames)
	.mutation("add", {
		input: GameModel.omit({ id: true }).extend({ genres: z.array(GenreModel), platforms: z.array(PlatformModel) }),
		resolve: () => "success"
	})
