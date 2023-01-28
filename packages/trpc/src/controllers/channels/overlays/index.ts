import { authedProcedure, publicProcedure } from "../../../initTRPC"
import * as ChannelsOverlaysService from "../../../services/channels/overlays"
import { checkRole } from "../../../services/users"
import { z } from "zod"

const toggle = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			newState: z.boolean()
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.channelId,
			roles: ["ADMIN", "OWNER"]
		})

		const channel = await ChannelsOverlaysService.toggle({
			channelId: input.channelId,
			newState: input.newState
		})
		return channel
	})

const getOverlay = publicProcedure
	.input(z.string())
	.query(async ({ input: id }) => {
		const result = await ChannelsOverlaysService.getOverlay(id)
		return result
	})

const editColor = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			color: z.string(),
			colorKeyToChange: z.enum([
				"backgroundColorPrimary",
				"backgroundColorSecondary",
				"textColorPrimary",
				"textColorSecondary",
				"textColorAccent"
			])
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.channelId,
			roles: ["ADMIN", "OWNER"]
		})

		const channel = await ChannelsOverlaysService.editColor({
			channelId: input.channelId,
			color: input.color,
			colorKeyToChange: input.colorKeyToChange
		})

		return channel
	})

const editKit = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			kitId: z.string().nullable(),
			kitToChange: z.enum(["primaryWzTwoKit", "secondaryWzTwoKit"])
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId: input.channelId,
			roles: ["ADMIN", "EDITOR", "OWNER"]
		})

		const channel = await ChannelsOverlaysService.editKit(input)
		return channel
	})

export const ChannelsOverlaysController = {
	toggle,
	getOverlay,
	editColor,
	editKit
}
