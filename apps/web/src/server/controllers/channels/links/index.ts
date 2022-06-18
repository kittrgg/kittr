import { createController } from "@Server/createController"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"
import { ChannelLinkModel } from "@kittr/prisma/validator"
import { TRPCError } from "@trpc/server"

const upsertLinks = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		links: z.array(ChannelLinkModel)
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}

		const channel = await ChannelsService.updateLinks({
			authToken: input.authToken,
			channelId: input.channelId,
			links: input.links
		})
		return channel
	}
})

export const ChannelsLinksController = {
	upsertLinks
}
