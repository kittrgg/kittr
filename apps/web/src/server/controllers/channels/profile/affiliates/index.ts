import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { ChannelAffiliateModel } from "@kittr/prisma/validator"
import { z } from "zod"

const createAffiliate = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			data: ChannelAffiliateModel.omit({ id: true })
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsService.createAffiliate({
				channelId: input.channelId,
				data: input.data
			})

			return channel
		}
	})

const updateAffiliate = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			data: ChannelAffiliateModel
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsService.updateAffiliate({
				data: input.data
			})
			return channel
		}
	})

const deleteAffiliate = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			affiliateId: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsService.deleteAffiliate(input)
			return channel
		}
	})

export const ChannelsProfileAffiliatesController = {
	createAffiliate,
	updateAffiliate,
	deleteAffiliate
}
