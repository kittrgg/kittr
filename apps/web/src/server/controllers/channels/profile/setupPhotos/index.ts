import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsProfileSetupPhotosService from "@Server/services/channels/profile/setupPhotos"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const updateSetupPhotos = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			slot: z.number(),
			bool: z.boolean(),
			channelId: z.string(),
			channelProfileId: z.string()
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

			const channelProfile = await ChannelsProfileSetupPhotosService.updateSetupPhotos(input)

			return channelProfile
		}
	})

export const ChannelsProfileSetupPhotosController = {
	updateSetupPhotos
}
