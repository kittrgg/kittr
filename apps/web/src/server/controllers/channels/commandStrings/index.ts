import { createController } from "@Server/createController"
import * as ChannelsCommandStringsService from "@Server/services/channels/commandStrings"
import { z } from "zod"
import { TRPCError } from "@trpc/server"

const getCommandString = createController().mutation("", {
	input: z.object({
		channelId: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsCommandStringsService.getCommandString(input)
		return channel
	}
})

const updateCommandString = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		newString: z.string()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsCommandStringsService.updateCommandString({
			authToken: input.authToken,
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
