import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const addGameToChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		gameId: z.string()
	}),
	async resolve({ input: { channelId, gameId } }) {
		const channel = await ChannelsService.addGame({ channelId, gameId })
		return channel
	}
})
const deleteGameFromChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		gameId: z.string()
	}),
	async resolve({ input: { channelId, gameId } }) {
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
