import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const listTopChannels = createController().query("", {
	input: z.object({
		skip: z.number().optional(),
		take: z.number().optional()
	}),
	async resolve({ input: { skip, take } }) {
		const result = await ChannelsService.listTopChannels({ skip, take })
		return result
	}
})

const countChannels = createController().query("", {
	input: z.string().optional(),
	async resolve({ input: urlSafeName }) {
		const total = await ChannelsService.countChannels(urlSafeName)
		return total
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

const getOverlay = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const result = await ChannelsService.getOverlay(id)
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

const getChannelProfile = createController().query("", {
	input: z.string(),
	async resolve({ input: urlSafeName }) {
		const channel = await ChannelsService.getChannelProfileByUrlSafeName(urlSafeName)

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
	getChannelProfile,
	deleteChannel,
	countChannels,
	getOverlay
}
