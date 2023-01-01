import { Context } from "./context"
import { WarzoneAdminController } from "./controllers/admin/warzone"
import { Warzone2AdminController } from "./controllers/admin/warzone2"
import { GamesController } from "./controllers/games"
// import { createRouter } from "./createRouter"
import { ChannelsController } from "@Server/controllers/channels"
import { ChannelsCommandStringsController } from "@Server/controllers/channels/commandStrings"
import { ChannelsGamesController } from "@Server/controllers/channels/games"
import { ChannelsKitsController } from "@Server/controllers/channels/kits"
import { ChannelsLinksController } from "@Server/controllers/channels/links"
import { ChannelsManagersController } from "@Server/controllers/channels/managers"
import { ChannelsManagersOwnersController } from "@Server/controllers/channels/managers/owners"
import { ChannelsOverlaysController } from "@Server/controllers/channels/overlays"
import { ChannelsPcSpecsController } from "@Server/controllers/channels/pcSpecs"
import { ChannelsPlanController } from "@Server/controllers/channels/plan"
import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { ChannelsProfileAffiliatesController } from "@Server/controllers/channels/profile/affiliates"
import { ChannelsProfileBrandColorsController } from "@Server/controllers/channels/profile/brandColors"
import { ChannelsProfileCoverPhotoController } from "@Server/controllers/channels/profile/coverPhoto"
import { ChannelsProfileCreatorCodesController } from "@Server/controllers/channels/profile/creatorCodes"
import { ChannelsProfileImageController } from "@Server/controllers/channels/profile/image"
import { ChannelsProfileSetupPhotosController } from "@Server/controllers/channels/profile/setupPhotos"
import { ChannelsProfileYouTubeAutoplayController } from "@Server/controllers/channels/profile/youtubeAutoplay"
import { KitsController } from "@Server/controllers/kits"
import { KitsBasesController } from "@Server/controllers/kits/bases"
import { KitsBasesOptionsController } from "@Server/controllers/kits/bases/options"
import { ManagersChannelsController } from "@Server/controllers/managers/channels"
import { StripeController } from "@Server/controllers/stripe"
import { TwitchController } from "@Server/controllers/twitch"
import { UsersController } from "@Server/controllers/users"
// import { authenticateAdmin } from "@Server/middlewares/authenticateAdmin"
// import { authenticateUser } from "@Server/middlewares/authenticateUser"
import admin from "@Services/firebase/admin"
import { captureMessage } from "@kittr/logger/node"
import { GameModel } from "@kittr/prisma/validator"
import { inferRouterInputs, inferRouterOutputs, TRPCError } from "@trpc/server"
import { inferProcedureInput, inferProcedureOutput, initTRPC } from "@trpc/server"
import superjson from "superjson"
import { z } from "zod"

export const t = initTRPC.context<Context>().create({
	transformer: superjson,
	errorFormatter({ shape, error, path, type, input, ctx }) {
		captureMessage(`${error.code}: ${path}` ?? "Unknown tRPC path", {
			level: "error",
			tags: { isKittr: true },
			extra: { type },
			contexts: { error: { ...error }, ctx: { ...ctx }, input: { input: JSON.stringify(input) } }
		})
		return shape
	}
})

export const middleware = t.middleware

export const authenticateAdmin = middleware(async ({ ctx, next }) => {
	if (!ctx.userToken) {
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}
	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	const administrator = await prisma.administrator.findFirst({
		where: {
			firebaseUserId: firebaseUser.uid
		}
	})

	if (!administrator) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "It doesn't look like you're a site administrator."
		})
	}

	return next({
		ctx: {
			user: firebaseUser,
			adminUser: administrator
		}
	})
})

export const authenticateUser = middleware(async ({ ctx, next }) => {
	if (!ctx.userToken) {
		throw new TRPCError({
			code: "UNAUTHORIZED"
		})
	}
	const firebaseUser = await admin.verifyIdToken(ctx.userToken)

	return next({
		ctx: {
			user: firebaseUser
		}
	})
})

export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
export const router = t.router
export const adminProcedure = t.procedure.use(authenticateAdmin)
export const authedProcedure = t.procedure.use(authenticateUser)

// export const legacyRouter = createRouter()
// 	.formatError(({ shape, error, path, ctx, type, input }) => {
// 		captureMessage(`${error.code}: ${path}` ?? "Unknown tRPC path", {
// 			level: "error",
// 			tags: { isKittr: true },
// 			extra: { type },
// 			contexts: { error: { ...error }, ctx: { ...ctx }, input: { input: JSON.stringify(input) } }
// 		})
// 		return shape
// 	})
// 	.transformer(superjson)
// 	.merge("admin/", adminRouter)
// 	.merge("games/", gamesRouter)
// 	.merge("channels/", channelsRouter)
// 	.merge("managers/", managersRouter)
// 	.merge("kits/", kitsRouter)
// 	.merge("twitch/", twitchRouter)
// 	.merge("stripe/", stripeRouter)
// 	.merge("users/", usersRouter)

export const appRouter = t.router({
	...WarzoneAdminController,
	...Warzone2AdminController,
	...GamesController,
	...ChannelsController,
	...ChannelsCommandStringsController,
	...ChannelsGamesController,
	...ChannelsKitsController,
	...ChannelsLinksController,
	...ChannelsManagersController,
	...ChannelsManagersOwnersController,
	...ChannelsOverlaysController,
	...ChannelsPcSpecsController,
	...ChannelsPlanController,
	...ChannelsProfileController,
	...ChannelsProfileAffiliatesController,
	...ChannelsProfileBrandColorsController,
	...ChannelsProfileCoverPhotoController,
	...ChannelsProfileCreatorCodesController,
	...ChannelsProfileImageController,
	...ChannelsProfileSetupPhotosController,
	...ChannelsProfileYouTubeAutoplayController,
	...KitsController,
	...KitsBasesController,
	...KitsBasesOptionsController,
	...ManagersChannelsController,
	...StripeController,
	...TwitchController,
	...UsersController
})

export type AppRouter = typeof appRouter
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
