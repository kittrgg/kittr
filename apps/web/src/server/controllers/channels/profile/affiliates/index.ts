import { ChannelAffiliateModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const createAffiliate = createController().mutation("", {
	input: ChannelAffiliateModel.omit({ id: true }),
	async resolve({ input }) {
		if (!input.channelProfileId) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "Missing channelProfileId."
			})
		}

		const channel = await ChannelsService.createAffiliate(input)

		return channel
	}
})

const updateAffiliate = createController().mutation("", {
	input: ChannelAffiliateModel,
	async resolve({ input }) {
		const { id, ...affiliate } = input

		const channel = await ChannelsService.updateAffiliate({ id: input.id, data: affiliate })
		return channel
	}
})

const deleteAffiliate = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		affiliateId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsService.deleteAffiliate(input)
		return channel
	}
})

export const ChannelsProfileAffiliatesController = {
	createAffiliate,
	updateAffiliate,
	deleteAffiliate
}
