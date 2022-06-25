import { KitModel, KitOptionModel } from "@kittr/prisma/validator"
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
			kit: KitModel.extend({
				options: KitOptionModel.array().default([])
			}).partial({ id: true })
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			const channel = await ChannelsService.upsertKit({ channelId: input.channelId, kit: input.kit })
			return channel
		}
	})

const deleteKitFromChannel = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			kitId: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			const channel = await ChannelsService.deleteKit({ channelId: input.channelId, kitId: input.kitId })
			return channel
		}
	})

export const ChannelsKitsController = {
	upsertKitToChannel,
	deleteKitFromChannel
}
