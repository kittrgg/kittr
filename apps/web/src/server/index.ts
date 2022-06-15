/**
 * This file contains the root router of your tRPC-backend
 */
import { gamesRouter } from "@Server/routers/games"
import superjson from "superjson"
import { createRouter } from "./createRouter"
import { channelsRouter } from "./routers/channels"
import { kitsRouter } from "./routers/kits"
import { twitchRouter } from "./routers/twitch"

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
	.transformer(superjson)
	.merge("games/", gamesRouter)
	.merge("channels/", channelsRouter)
	.merge("kits/", kitsRouter)
	.merge("twitch/", twitchRouter)

export type AppRouter = typeof appRouter
