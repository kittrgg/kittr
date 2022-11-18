import { ChannelModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { z } from "zod"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

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

// This method gets all channels on kittr
const countAllChannels = createController().query("", {
	async resolve() {
		const total = await ChannelsService.countAllChannels()
		return total
	}
})


// This method counts channels per game
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

const getDashboardChannel = createController()
	.middleware(authenticateUser)
	.query("", {
		input: z.string(),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input, roles: ["ADMIN", "EDITOR", "OWNER"] })

			const channel = await ChannelsService.getDashboardChannel({ id: input })

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

const createChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z
			.string()
			.min(1, "You must provide a display name.")
			.max(25, "That channel name is too long. 25 characters or less."),
		async resolve({ ctx, input: displayName }) {
			const channel = await ChannelsService.createChannel({ displayName, ownerFirebaseId: ctx.user.uid })

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
			channelId: z.string()
		}),
		async resolve({ ctx, input: { channelId } }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId, roles: ["OWNER"] })


			const channel = await ChannelsService.deleteChannel({ channelId })

			if (channel.plan?.stripeSubscriptionId) {
				await stripe.subscriptions.del(channel.plan?.stripeSubscriptionId)
			}

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
	countChannels,
	countAllChannels
}
