import { WarzoneKitModel, WarzoneKitOptionModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const upsertKitToChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			kit: WarzoneKitModel.extend({
				options: WarzoneKitOptionModel.array().default([])
			}).partial({ id: true }),
			gameView: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			const channel = await ChannelsService.upsertKit({
				channelId: input.channelId,
				kit: input.kit,
				gameView: input.gameView
			})
			return channel
		}
	})

const deleteKitFromChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			kitId: z.string(),
			gameView: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			const channel = await ChannelsService.deleteKit({
				channelId: input.channelId,
				kitId: input.kitId,
				gameView: input.gameView
			})
			return channel
		}
	})

export const ChannelsKitsController = {
	upsertKitToChannel,
	deleteKitFromChannel
}
