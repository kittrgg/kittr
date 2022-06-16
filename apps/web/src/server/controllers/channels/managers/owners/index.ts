import { createController } from "@Server/createController"
import * as ChannelsManagersOwnersService from "@Server/services/channels/managers/owners"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const editOwner = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		newOwnerEmail: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}
		const channel = await ChannelsManagersOwnersService.editOwner(input)
		return channel
	}
})

export const ChannelsManagersOwnersController = {
	editOwner
}
