import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const listTopChannels = createController().query("", {
	async resolve() {
		const result = await ChannelsService.listTopChannels()
		return result
	}
})

const listRisingChannels = createController().query("", {
	async resolve() {
		const result = await ChannelsService.listRisingChannels()
		return result
	}
})

const listLiveChannels = createController().query("", {
	async resolve() {
		const result = await ChannelsService.listLiveChannels()
		return result
	}
})

const getDashboardChannel = createController().query("", {
	input: z.object({
		id: z.string(),
		urlSafeName: z.string()
	}),
	async resolve({ input }) {
		const { id, urlSafeName } = input
		const channel = await ChannelsService.getDashboardChannel({ id, urlSafeName })
		return channel
	}
})

const deleteChannel = createController().mutation("", {
	input: z.string(),
	async resolve({ input }) {
		const channel = await ChannelsService.deleteChannel(input)
		return channel
	}
})

export const ChannelsController = {
	listTopChannels,
	listRisingChannels,
	listLiveChannels,
	getDashboardChannel,
	deleteChannel
}
