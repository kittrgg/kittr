import { createRouter } from "@Server/createRouter"
import { GamesController } from "@Server/controllers/games"
import { GameModel } from "@kittr/prisma/validator"
import { z } from "zod"
import { prisma } from "@kittr/prisma"
import { authenticateAdmin } from "@Server/middlewares/authenticateAdmin"

export const gamesRouter = createRouter()
	.merge("getByUrlSafeName", GamesController.getGameByUrlSafeName)
	.merge("getById", GamesController.getGameById)
	.merge("list", GamesController.listGames)
	.query("list-genres", {
		resolve: async () => await prisma.genre.findMany()
	})
	.query("list-platforms", {
		resolve: async () => await prisma.platform.findMany()
	})
	.middleware(authenticateAdmin)
	.mutation("add", {
		input: GameModel.omit({ id: true }).extend({ genres: z.array(z.string()), platforms: z.array(z.string()) })
		,
		resolve: async ({ input }) => {
			const { genres, platforms, ...game } = input

			const savedGame = await prisma.game.create({
				data: {
					...game,
					genres: { connect: genres.map((id) => ({ id })) },
					platforms: { connect: platforms.map((id) => ({ id })) }
				}
			})

			return savedGame
		}
	})
