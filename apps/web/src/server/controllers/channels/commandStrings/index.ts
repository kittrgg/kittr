import { createController } from "@Server/createController"
import * as ChannelsCommandStringsService from "@Server/services/channels/commandStrings"
import { z } from "zod"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { checkRole } from "@Server/services/users"

const getCommandString = createController().mutation("", {
	input: z.object({
		channelId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsCommandStringsService.getCommandString(input)
		return channel
	}
})

const updateCommandString = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			newString: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN", "EDITOR"] })

			const channel = await ChannelsCommandStringsService.updateCommandString({
				channelId: input.channelId,
				newString: input.newString
			})
			return channel
		}
	})

export const ChannelsCommandStringsController = {
	getCommandString,
	updateCommandString
}
