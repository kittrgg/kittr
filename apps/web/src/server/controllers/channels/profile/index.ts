import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const getChannelProfile = createController().query("", {
	input: z.string(),
	async resolve({ input }) {
		const channel = await ChannelsService.getChannelProfileByUrlSafeName(input)

		return channel
	}
})

export const ChannelsProfileController = {
	getChannelProfile
}
