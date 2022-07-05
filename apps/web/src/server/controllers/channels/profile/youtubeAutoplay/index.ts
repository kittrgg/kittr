import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsProfileYoutubeAutoplayService from "@Server/services/channels/profile/youtubeAutoplay"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const toggle = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			shouldYoutubeAutoplay: z.boolean()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsProfileYoutubeAutoplayService.toggleYoutubeAutoplay({
				channelId: input.channelId,
				shouldYoutubeAutoplay: input.shouldYoutubeAutoplay
			})

			return channel
		}
	})

export const ChannelsProfileYouTubeAutoplayController = {
	toggle
}
