import { Context } from "./context"
import { WarzoneAdminController } from "./controllers/admin/warzone"
import { GamesController } from "./controllers/games"
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
import { authenticateAdmin } from "@Server/middlewares/authenticateAdmin"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { captureMessage } from "@kittr/logger/node"
import { GameModel } from "@kittr/prisma/validator"
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
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

export const router = t.router
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
export const adminProcedure = t.procedure.use(authenticateAdmin)
export const authedProcedure = t.procedure.use(authenticateUser)
export const middleware = t.middleware

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
// 	// .merge("admin/", adminRouter)
// 	// .merge("games/", gamesRouter)
// 	// .merge("channels/", channelsRouter)
// 	// .merge("managers/", managersRouter)
// 	// .merge("kits/", kitsRouter)
// 	// .merge("twitch/", twitchRouter)
// 	// .merge("stripe/", stripeRouter)
// 	// .merge("users/", usersRouter)

export const appRouter = router({
	kits: router({
		bases: router({
			"options": router({
				list: KitsBasesOptionsController.list
			}),
			"list": KitsBasesController.listBases,
			"game-list": KitsBasesController.listGameBases
		}),
		count: KitsController.countKits
	}),
	channels: router({
		"games": router({
			list: ChannelsGamesController.listChannelsForGame,
			add: ChannelsGamesController.addGameToChannel,
			delete: ChannelsGamesController.deleteGameFromChannel
		}),
		"kits": router({
			upsert: ChannelsKitsController.upsertKitToChannel,
			upsertWz2Kit: ChannelsKitsController.upsertWz2KitToChannel,
			delete: ChannelsKitsController.deleteKitFromChannel
		}),
		"profile": router({
			"affiliates": router({
				create: ChannelsProfileAffiliatesController.createAffiliate,
				update: ChannelsProfileAffiliatesController.updateAffiliate,
				delete: ChannelsProfileAffiliatesController.deleteAffiliate
			}),
			"pc-specs": router({
				list: ChannelsPcSpecsController.listPcSpec,
				get: ChannelsPcSpecsController.getPcSpec,
				create: ChannelsPcSpecsController.createPcSpec,
				update: ChannelsPcSpecsController.updatePcSpec,
				delete: ChannelsPcSpecsController.deletePcSpec
			}),
			"creator-codes": router({
				upsert: ChannelsProfileCreatorCodesController.upsertCode
			}),
			"youtube-autoplay": router({
				upsert: ChannelsProfileYouTubeAutoplayController.toggle
			}),
			"brand-color": router({
				upsert: ChannelsProfileBrandColorsController.upsertBrandColor
			}),
			"setup-photos": router({
				update: ChannelsProfileSetupPhotosController.updateSetupPhotos
			}),
			"image": router({
				update: ChannelsProfileImageController.updateProfileImage
			}),
			"cover-photo": router({
				update: ChannelsProfileCoverPhotoController.update
			}),
			"get": ChannelsProfileController.getChannelProfile
		}),
		"overlay": router({
			color: router({
				edit: ChannelsOverlaysController.editColor
			}),
			kit: router({
				edit: ChannelsOverlaysController.editKit
			}),
			toggle: ChannelsOverlaysController.toggle,
			get: ChannelsOverlaysController.getOverlay
		}),
		"managers": router({
			owner: router({
				edit: ChannelsManagersOwnersController.editOwner
			}),
			list: ChannelsManagersController.listManagers,
			create: ChannelsManagersController.createManager,
			demote: ChannelsManagersController.demoteManager,
			promote: ChannelsManagersController.promoteManager,
			delete: ChannelsManagersController.deleteManager
		}),
		"command-strings": router({
			get: ChannelsCommandStringsController.getCommandString,
			upsert: ChannelsCommandStringsController.upsertCommandString
		}),
		"links": router({
			upsert: ChannelsLinksController.upsertLinks
		}),
		"plan": router({
			"get": ChannelsPlanController.getPlan,
			"subscription-end": ChannelsPlanController.getSubscriptionEnd,
			"card-last-4-digits": ChannelsPlanController.getCardLast4Digits
		}),
		"top": ChannelsController.listTopChannels,
		"rising": ChannelsController.listRisingChannels,
		"live": ChannelsController.getDashboardChannel,
		"dashboard": ChannelsController.getDashboardChannel,
		"count": ChannelsController.countChannels,
		"countAll": ChannelsController.countAllChannels,
		"create": ChannelsController.createChannel,
		"update": ChannelsController.updateChannel,
		"delete": ChannelsController.deleteChannel
	}),
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

export type AppRouter = typeof appRouter
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
