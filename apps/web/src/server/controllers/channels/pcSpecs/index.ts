import { createController } from "@Server/createController"
import * as ChannelsPcSpecsService from "@Server/services/channels/pcSpecs"
import { z } from "zod"
import { ChannelPcSpecModel } from "@kittr/prisma/validator"
import { TRPCError } from "@trpc/server"

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

const createPcSpec = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		data: ChannelPcSpecModel.pick({ partName: true, partType: true })
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsPcSpecsService.createPcSpec({
			authToken: input.authToken,
			channelId: input.channelId,
			data: input.data
		})
		return channel
	}
})

const updatePcSpec = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		pcSpecId: z.string(),
		channelId: z.string(),
		data: ChannelPcSpecModel.pick({ partName: true, partType: true })
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsPcSpecsService.updatePcSpec({
			authToken: input.authToken,
			pcSpecId: input.pcSpecId,
			channelId: input.channelId,
			data: input.data
		})
		return channel
	}
})

const deletePcSpec = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		pcSpecId: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsPcSpecsService.deletePcSpec({
			authToken: input.authToken,
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