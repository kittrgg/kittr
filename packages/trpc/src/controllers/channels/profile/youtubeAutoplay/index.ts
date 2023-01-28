import { authedProcedure } from "@Server/initTRPC"
import * as ChannelsProfileYoutubeAutoplayService from "@Server/services/channels/profile/youtubeAutoplay"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const toggle = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			shouldYoutubeAutoplay: z.boolean()
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

		const channel = await ChannelsProfileYoutubeAutoplayService.toggleYoutubeAutoplay({
			channelId: input.channelId,
			shouldYoutubeAutoplay: input.shouldYoutubeAutoplay
		})

		return channel
	})

export const ChannelsProfileYouTubeAutoplayController = {
	toggle
}
