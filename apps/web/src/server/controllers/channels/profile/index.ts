import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const getChannelProfile = createController().query("", {
	input: z.object({
		id: z.string(),
		urlSafeName: z.string()
	}),
	async resolve({ input }) {
		const { id, urlSafeName } = input
		const channel = await ChannelsService.getChannelProfile({ id, urlSafeName })

		return channel
	}
})

export const ChannelsProfileController = {
	getChannelProfile
}
