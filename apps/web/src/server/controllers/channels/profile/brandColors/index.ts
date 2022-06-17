import { createController } from "@Server/createController"
import * as ChannelsBrandColorsService from "@Server/services/channels"
import { z } from "zod"
import { TRPCError } from "@trpc/server"

const getChannelProfile = createController().query("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		newColor: z.string(),
		colorId: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsBrandColorsService.upsertBrandColor({
			authToken: input.authToken,
			channelId: input.channelId,
			colorId: input.colorId,
			newColor: input.newColor
		})

		return channel
	}
})

export const ChannelsProfileBrandColorsController = {
	getChannelProfile
}
