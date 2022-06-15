import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"
import { KitOptionModel, KitModel } from "@kittr/prisma/validator"

const upsertKitToChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		kit: KitModel.extend({
			options: KitOptionModel.array().default([])
		})
	}),
	async resolve({ input }) {
		const channel = await ChannelsService.upsertKit({ channelId: input.channelId, kit: input.kit })
		return channel
	}
})

const deleteKitFromChannel = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		kitId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsService.deleteKit({ channelId: input.channelId, kitId: input.kitId })
		return channel
	}
})

export const ChannelsKitsController = {
	upsertKitToChannel,
	deleteKitFromChannel
}