import { createController } from "@Server/createController"
import * as ChannelsOverlaysService from "@Server/services/channels/overlays"
import { z } from "zod"
import { ChannelKitOverlayModel } from "@kittr/prisma/validator"

const toggle = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		newState: z.boolean()
	}),
	async resolve({ input }) {
		const channel = await ChannelsOverlaysService.toggle({ channelId: input.channelId, newState: input.newState })
		return channel
	}
})

const getOverlay = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const result = await ChannelsOverlaysService.getOverlay(id)
		return result
	}
})

const editColor = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		color: z.string(),
		colorKeyToChange: z.enum([
			"backgroundColorPrimary",
			"backgroundColorSecondary",
			"textColorPrimary",
			"textColorSecondary",
			"textColorAccent"
		])
	}),
	async resolve({ input }) {
		const channel = await ChannelsOverlaysService.editColor({
			channelId: input.channelId,
			color: input.color,
			colorKeyToChange: input.colorKeyToChange
		})

		return channel
	}
})

export const ChannelsOverlaysController = {
	toggle,
	getOverlay,
	editColor
}
