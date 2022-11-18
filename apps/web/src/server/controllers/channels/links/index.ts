import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"
import { ChannelLinkModel } from "@kittr/prisma/validator"
import { checkRole } from "@Server/services/users"
import { authenticateUser } from "@Server/middlewares/authenticateUser"

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
