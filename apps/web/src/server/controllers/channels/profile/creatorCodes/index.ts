import { createController } from "@Server/createController"
import * as ChannelsProfileCreatorCodesService from "@Server/services/channels/profile/creatorCodes"
import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { ChannelAffiliateCodeModel } from "@kittr/prisma/validator"

const upsertCode = createController().query("", {
	input: z.object({
		authToken: z.string().optional(),
		code: ChannelAffiliateCodeModel
	}),
	async resolve({ input }) {
		if (!input.authToken) {
			throw new TRPCError({
				code: "UNAUTHORIZED"
			})
		}
		const channel = await ChannelsProfileCreatorCodesService.upsertCode({
			authToken: input.authToken,
			codeUpdate: input.code
		})

		return channel
	}
})

export const ChannelsProfileCreatorCodesController = {
	upsertCode
}
