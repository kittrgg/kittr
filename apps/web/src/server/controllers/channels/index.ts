import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"

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

export const ChannelsController = {
	listTopChannels,
	listRisingChannels,
	listLiveChannels
}
