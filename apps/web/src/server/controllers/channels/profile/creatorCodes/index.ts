import { ChannelCreatorCodeModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsProfileCreatorCodesService from "@Server/services/channels/profile/creatorCodes"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const upsertCode = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			code: ChannelCreatorCodeModel.partial({ id: true })
		}),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.code.channelId, roles: ["OWNER", "ADMIN"] })

			const channel = await ChannelsProfileCreatorCodesService.upsertCode({
				codeUpdate: input.code
			})

			return channel
		}
	})

export const ChannelsProfileCreatorCodesController = {
	upsertCode
}
