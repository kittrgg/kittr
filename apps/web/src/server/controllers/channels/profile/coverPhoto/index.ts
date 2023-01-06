import { authedProcedure } from "@Server/initTRPC"
import * as ChannelsProfileCoverPhotoService from "@Server/services/channels/profile/coverPhoto"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const update = authedProcedure
	.input(
		z.object({
			channelId: z.string(),
			hasCoverPhoto: z.boolean()
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "OWNER"] })

		const channel = await ChannelsProfileCoverPhotoService.update({
			channelId: input.channelId,
			hasCoverPhoto: input.hasCoverPhoto
		})

		return channel
	})

export const ChannelsProfileCoverPhotoController = {
	update
}
