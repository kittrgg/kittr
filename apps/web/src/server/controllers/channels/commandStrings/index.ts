import { createController } from "@Server/createController"
import * as ChannelsCommandStringsService from "@Server/services/channels/commandStrings"
import { z } from "zod"

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
		authToken: z.string(),
		channelId: z.string(),
		newString: z.string()
	}),
	async resolve({ input }) {
		const channel = await ChannelsCommandStringsService.updateCommandString(input)
		return channel
	}
})

export const ChannelsCommandStringsController = {
	getCommandString,
	updateCommandString
}
