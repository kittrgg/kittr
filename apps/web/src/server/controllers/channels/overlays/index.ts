import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsOverlaysService from "@Server/services/channels/overlays"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const toggle = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			newState: z.boolean()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "OWNER"] })

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

const editColor = createController()
	.middleware(authenticateUser)
	.mutation("", {
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
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "OWNER"] })

			const channel = await ChannelsOverlaysService.editColor({
				channelId: input.channelId,
				color: input.color,
				colorKeyToChange: input.colorKeyToChange
			})

			return channel
		}
	})

const editKit = createController().mutation("", {
	input: z.object({
		channelId: z.string(),
		kitId: z.string().nullable(),
		kitToChange: z.enum(["primaryKit", "secondaryKit"])
	}),
	async resolve({ input }) {
		const channel = await ChannelsOverlaysService.editKit(input)
		return channel
	}
})

export const ChannelsOverlaysController = {
	toggle,
	getOverlay,
	editColor,
	editKit
}
