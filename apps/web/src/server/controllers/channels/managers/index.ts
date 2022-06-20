import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsManagersService from "@Server/services/channels/managers"
import { checkRole } from "@Server/services/users"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const createManager = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			data: z.object({
				email: z.string(),
				role: z.enum(["OWNER", "ADMIN", "EDITOR"])
			})
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const manager = await ChannelsManagersService.createManager({
				channelId: input.channelId,
				email: input.data.email,
				role: input.data.role
			})

			return manager
		}
	})

const demoteManager = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			managerIdToDemote: z.string()
		}),
		async resolve({ ctx, input: { channelId, managerIdToDemote } }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsManagersService.demoteManager({
				channelId,
				managerIdToDemote
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

const deleteManager = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			authToken: z.string().optional(),
			channelId: z.string(),
			managerIdToDelete: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsManagersService.deleteManager({
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
