import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsProfileImageService from "@Server/services/channels/profile/image"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const updateProfileImage = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channelProfile = await ChannelsProfileImageService.updateProfileImage(input)

			return channelProfile
		}
	})

export const ChannelsProfileImageController = {
	updateProfileImage
}
