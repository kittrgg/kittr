import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const addGameToChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		gameId: z.string()
	}),
	async resolve({ input: { channelId, gameId } }) {
		const channel = await ChannelsService.deleteGame({ channelId, gameId })
		return channel
	}
})
const deleteGameFromChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		gameId: z.string()
	}),
	async resolve({ input: { channelId, gameId } }) {
		const channel = await ChannelsService.addGame({ channelId, gameId })
		return channel
	}
})

export const ChannelsGamesController = {
	addGameToChannel,
	deleteGameFromChannel
}
