import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { ChannelModel } from "@kittr/prisma/validator"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { checkRole } from "@Server/services/users"

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

const createChannel = createController().mutation("", {
	input: z
		.string()
		.min(1, "You must provide a display name.")
		.max(25, "That channel name is too long. 25 characters or less."),
	async resolve({ input: displayName }) {
		const channel = await ChannelsService.createChannel(displayName)

		return channel
	}
})

const updateChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			data: ChannelModel.partial()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsService.updateChannel({
				channelId: input.channelId,
				data: input.data
			})
			return channel
		}
	})

const deleteChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
		}),
		async resolve({ctx, input: {channelId} }) {

	await checkRole({ firebaseUserId:ctx.user.uid , channelId, roles: ["OWNER"] })


			const channel = await ChannelsService.deleteChannel({ channelId })
			return channel
		}
	})

export const ChannelsController = {
	listTopChannels,
	listRisingChannels,
	listLiveChannels,
	getDashboardChannel,
	getChannelProfile,
	createChannel,
	updateChannel,
	deleteChannel,
	countChannels
}
