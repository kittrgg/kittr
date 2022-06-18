import { createController } from "@Server/createController"
import * as ChannelsManagersService from "@Server/services/channels/managers"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const createManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		data: z.object({
			email: z.string(),
			role: z.enum(["OWNER", "ADMIN", "EDITOR"])
		})
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const manager = await ChannelsManagersService.createManager({
			authToken: input.authToken,
			channelId: input.channelId,
			email: input.data.email,
			role: input.data.role
		})

		return manager
	}
})

const demoteManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		managerIdToDemote: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsManagersService.demoteManager({
			authToken: input.authToken,
			channelId: input.channelId,
			managerIdToDemote: input.managerIdToDemote
		})

		return channel
	}
})

const promoteManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		managerIdToPromote: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsManagersService.promoteManager({
			authToken: input.authToken,
			channelId: input.channelId,
			managerIdToPromote: input.managerIdToPromote
		})
		return channel
	}
})

const deleteManager = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		managerIdToDelete: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsManagersService.deleteManager({
			authToken: input.authToken,
			channelId: input.channelId,
			managerIdToDelete: input.managerIdToDelete
		})
		return channel
	}
})

export const ChannelsManagersController = {
	createManager,
	promoteManager,
	demoteManager,
	deleteManager
}
