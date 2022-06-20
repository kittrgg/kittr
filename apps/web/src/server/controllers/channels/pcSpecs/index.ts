import { createController } from "@Server/createController"
import * as ChannelsPcSpecsService from "@Server/services/channels/pcSpecs"
import { z } from "zod"
import { ChannelPcSpecModel } from "@kittr/prisma/validator"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { checkRole } from "@Server/services/users"

const listPcSpec = createController().mutation("", {
	input: z.object({
		channelId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsPcSpecsService.listPcSpecs(input.channelId)
		return channel
	}
})

const getPcSpec = createController().mutation("", {
	input: z.object({
		pcSpecId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsPcSpecsService.getPcSpec(input.pcSpecId)
		return channel
	}
})

const createPcSpec = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			data: ChannelPcSpecModel.pick({ partName: true, partType: true })
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsPcSpecsService.createPcSpec({
				channelId: input.channelId,
				data: input.data
			})
			return channel
		}
	})

const updatePcSpec = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			pcSpecId: z.string(),
			channelId: z.string(),
			data: ChannelPcSpecModel.pick({ partName: true, partType: true })
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsPcSpecsService.updatePcSpec({
				pcSpecId: input.pcSpecId,
				channelId: input.channelId,
				data: input.data
			})
			return channel
		}
	})

const deletePcSpec = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			pcSpecId: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsPcSpecsService.deletePcSpec({
				channelId: input.channelId,
				pcSpecId: input.pcSpecId
			})
			return channel
		}
	})

export const ChannelsPcSpecsController = {
	listPcSpec,
	getPcSpec,
	createPcSpec,
	updatePcSpec,
	deletePcSpec
}
