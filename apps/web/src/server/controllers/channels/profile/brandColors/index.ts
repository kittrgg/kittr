import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsBrandColorsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const upsertBrandColor = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			newColor: z.string(),
			colorId: z.string().optional()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsBrandColorsService.upsertBrandColor({
				channelId: input.channelId,
				colorId: input.colorId,
				newColor: input.newColor
			})

			return channel
		}
	})

export const ChannelsProfileBrandColorsController = {
	upsertBrandColor
}
