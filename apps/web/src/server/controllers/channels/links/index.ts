import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsService from "@Server/services/channels"
import { checkRole } from "@Server/services/users"
import { ChannelLinkModel } from "@kittr/prisma/validator"
import { z } from "zod"

const upsertLinks = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			links: z.array(ChannelLinkModel)
		}),
		async resolve({ ctx, input: { channelId, links } }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsService.updateLinks({
				channelId,
				links
			})
			return channel
		}
	})

export const ChannelsLinksController = {
	upsertLinks
}
