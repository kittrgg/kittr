import { Context } from "./context"
import { WarzoneAdminController } from "./controllers/admin/warzone"
import { GamesController } from "./controllers/games"
import { createRouter } from "./createRouter"
import { channelsRouter } from "./routers/channels"
import { kitsRouter } from "./routers/kits"
import { ManagersChannelsController } from "@Server/controllers/managers/channels"
import { StripeController } from "@Server/controllers/stripe"
import { TwitchController } from "@Server/controllers/twitch"
import { UsersController } from "@Server/controllers/users"
import { authenticateAdmin } from "@Server/middlewares/authenticateAdmin"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { captureMessage } from "@kittr/logger/node"
import { GameModel } from "@kittr/prisma/validator"
import { inferProcedureInput, inferProcedureOutput, initTRPC } from "@trpc/server"
import superjson from "superjson"
import { z } from "zod"

export const t = initTRPC.context<Context>().create({
	transformer: superjson,
	errorFormatter({ shape }) {
		return {
			...shape,
			data: {
				...shape.data
			}
		}
	}
})

export const router = t.router
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
export const adminProcedure = t.procedure.use(authenticateAdmin)
export const authedProcedure = t.procedure.use(authenticateUser)
export const middleware = t.middleware

export const legacyRouter = createRouter()
	.formatError(({ shape, error, path, ctx, type, input }) => {
		captureMessage(`${error.code}: ${path}` ?? "Unknown tRPC path", {
			level: "error",
			tags: { isKittr: true },
			extra: { type },
			contexts: { error: { ...error }, ctx: { ...ctx }, input: { input: JSON.stringify(input) } }
		})
		return shape
	})
	.transformer(superjson)
	// .merge("admin/", adminRouter)
	// .merge("games/", gamesRouter)
	.merge("channels/", channelsRouter)
	// .merge("managers/", managersRouter)
	.merge("kits/", kitsRouter)
	// .merge("twitch/", twitchRouter)
	// .merge("stripe/", stripeRouter)
	// .merge("users/", usersRouter)
	.interop()

const mainRouter = router({
	admin: router({
		warzone: router({
			kitBases: router({
				options: router({}),
				categories: router({}),
				list: WarzoneAdminController.listKitBases,
				get: WarzoneAdminController.getKitBase,
				create: WarzoneAdminController.createBase,
				update: WarzoneAdminController.updateBase,
				delete: WarzoneAdminController.deleteBase
			})
		}),
		warzone2: router({
			kitBases: router({
				options: router({}),
				categories: router({}),
				list: WarzoneAdminController.listKitBases,
				get: WarzoneAdminController.getKitBase,
				create: WarzoneAdminController.createBase,
				update: WarzoneAdminController.updateBase,
				delete: WarzoneAdminController.deleteBase
			})
		})
	}),
	users: router({
		create: UsersController.create
	}),
	twitch: router({
		"profile-page": TwitchController.getProfile
	}),
	games: router({
		"getByUrlSafeName": GamesController.getGameByUrlSafeName,
		"getById": GamesController.getGameById,
		"list": GamesController.listGames,
		"list-genres": publicProcedure.query(async () => await prisma.genre.findMany()),
		"list-platforms": publicProcedure.query(async () => await prisma.platform.findMany()),
		"add": adminProcedure
			.input(GameModel.omit({ id: true }).extend({ genres: z.array(z.string()), platforms: z.array(z.string()) }))
			.query(async ({ input }) => {
				const { genres, platforms, ...game } = input

				const savedGame = await prisma.game.create({
					data: {
						...game,
						genres: { connect: genres.map((id) => ({ id })) },
						platforms: { connect: platforms.map((id) => ({ id })) }
					}
				})

				return savedGame
			})
	}),
	stripe: router({
		"buy-premium": StripeController.buyPremium,
		"manage-premium": StripeController.managePremium
	}),
	managers: router({
		channels: router({
			list: ManagersChannelsController.listChannels
		})
	})
})

export const appRouter = mergeRouters(legacyRouter, mainRouter)

export type AppRouter = typeof appRouter

/** Enum containing all api query paths */
export type TQuery = keyof AppRouter["_def"]["queries"]

/** Enum containing all api mutation paths */
export type TMutation = keyof AppRouter["_def"]["mutations"]
export type TMutationPaths = AppRouter["_def"]["mutations"]

/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = InferQueryOutput<'hello'>
 */
export type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>

/**
 * This is a helper method to infer the input of a query resolver
 * @example type HelloInput = InferQueryInput<'hello'>
 */
export type InferQueryInput<TRouteKey extends TQuery> = inferProcedureInput<AppRouter["_def"]["queries"][TRouteKey]>

/**
 * This is a helper method to infer the output of a mutation resolver
 * @example type HelloOutput = InferMutationOutput<'hello'>
 */
export type InferMutationOutput<TRouteKey extends TMutation> = inferProcedureOutput<
	AppRouter["_def"]["mutations"][TRouteKey]
>

/**
 * This is a helper method to infer the input of a mutation resolver
 * @example type HelloInput = InferMutationInput<'hello'>
 */
export type InferMutationInput<TRouteKey extends TMutation> = inferProcedureInput<
	AppRouter["_def"]["mutations"][TRouteKey]
>
