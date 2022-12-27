import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsProfileCoverPhotoService from "@Server/services/channels/profile/coverPhoto"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const update = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			hasCoverPhoto: z.boolean()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "OWNER"] })

			const channel = await ChannelsProfileCoverPhotoService.update({
				channelId: input.channelId,
				hasCoverPhoto: input.hasCoverPhoto
			})

			return channel
		}
	})

export const ChannelsProfileCoverPhotoController = {
	update
}
