import { authedProcedure } from "@Server/index"
import * as ChannelsProfileCreatorCodesService from "@Server/services/channels/profile/creatorCodes"
import { checkRole } from "@Server/services/users"
import { ChannelCreatorCodeModel } from "@kittr/prisma/validator"
import { z } from "zod"

const upsertCode = authedProcedure
	.input(
		z.object({
			code: ChannelCreatorCodeModel.partial({ id: true })
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.code.channelId, roles: ["OWNER", "ADMIN"] })

		const channel = await ChannelsProfileCreatorCodesService.upsertCode({
			codeUpdate: input.code
		})

		return channel
	})

export const ChannelsProfileCreatorCodesController = {
	upsertCode
}
