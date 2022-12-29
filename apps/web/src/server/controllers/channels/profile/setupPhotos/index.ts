import { authedProcedure } from "@Server/index"
import * as ChannelsProfileSetupPhotosService from "@Server/services/channels/profile/setupPhotos"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const updateSetupPhotos = authedProcedure
	.input(
		z.object({
			slot: z.number(),
			bool: z.boolean(),
			channelId: z.string(),
			channelProfileId: z.string()
		})
	)
	.mutation(async ({ input, ctx }) => {
		await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })
		return await ChannelsProfileSetupPhotosService.updateSetupPhotos(input)
	})

export const ChannelsProfileSetupPhotosController = {
	updateSetupPhotos
}
