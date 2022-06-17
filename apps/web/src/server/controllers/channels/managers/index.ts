import { createController } from "@Server/createController"
import * as ChannelsManagersService from "@Server/services/channels/managers"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const demoteManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		managerId: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsManagersService.demoteManager(input)
		return channel
	}
})

const promoteManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		managerId: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsManagersService.promoteManager(input)
		return channel
	}
})

export const ChannelsManagersController = {
	promoteManager,
	demoteManager
}
