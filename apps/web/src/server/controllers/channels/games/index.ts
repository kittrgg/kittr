import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const addGameToChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			gameId: z.string()
		}),
		async resolve({ ctx, input: { channelId, gameId } }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId, roles: ["ADMIN", "OWNER"] })

			const channel = await ChannelsService.addGame({ channelId, gameId })
			return channel
		}
	})
const deleteGameFromChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			gameId: z.string()
		}),
		async resolve({ ctx, input: { channelId, gameId } }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId, roles: ["ADMIN", "OWNER"] })

			const channel = await ChannelsService.deleteGame({ channelId, gameId })
			return channel
		}
	})

const listChannelsForGame = createController().query("", {
	input: z.object({
		urlSafeName: z.string(),
		take: z.number(),
		skip: z.number()
	}),
	async resolve({ input: { urlSafeName, take, skip } }) {
		const channels = await ChannelsService.getChannelsByGame({ urlSafeName, take, skip })
		return channels
	}
})

export const ChannelsGamesController = {
	addGameToChannel,
	deleteGameFromChannel,
	listChannelsForGame
}
