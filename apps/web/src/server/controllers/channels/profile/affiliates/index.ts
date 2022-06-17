import { ChannelAffiliateModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const createAffiliate = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		data: ChannelAffiliateModel.omit({ id: true })
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "Missing channelProfileId."
			})
		}

		const channel = await ChannelsService.createAffiliate({
			authToken: input.authToken,
			channelId: input.channelId,
			data: input.data
		})

		return channel
	}
})

const updateAffiliate = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		data: ChannelAffiliateModel
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsService.updateAffiliate({
			authToken: input.authToken,
			channelId: input.channelId,
			data: input.data
		})
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
