import { authedProcedure } from "../../../initTRPC"
import * as ChannelsService from "../../../services/channels"
import { checkRole } from "../../../services/users"
import { ChannelLinkModel } from "@kittr/prisma/validator"
import { z } from "zod"

const upsertLinks = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			links: z.array(ChannelLinkModel)
		})
	)
	.mutation(async ({ ctx, input: { channelId, links } }) => {
		await checkRole({
			firebaseUserId: ctx.user.uid,
			channelId,
			roles: ["OWNER", "ADMIN"]
		})

		const channel = await ChannelsService.updateLinks({
			channelId,
			links
		})
		return channel
	})

export const ChannelsLinksController = {
	upsertLinks
}
