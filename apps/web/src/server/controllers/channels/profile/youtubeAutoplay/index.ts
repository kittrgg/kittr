import { createController } from "@Server/createController"
import * as ChannelsProfileYoutubeAutoplayService from "@Server/services/channels/profile/youtubeAutoplay"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const toggle = createController().mutation("", {
	input: z.object({
		authToken: z.string().optional(),
		channelId: z.string(),
		shouldYoutubeAutoplay: z.boolean()
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}
		const channel = await ChannelsProfileYoutubeAutoplayService.toggleYoutubeAutoplay({
			authToken: input.authToken,
			channelId: input.channelId,
			shouldYoutubeAutoplay: input.shouldYoutubeAutoplay
		})

		return channel
	}
})

export const ChannelsProfileYouTubeAutoplayController = {
	toggle
}
