import { ChannelAffiliateCodeModel } from "@kittr/prisma/validator"
import { createController } from "@Server/createController"
import * as ChannelsProfileCreatorCodesService from "@Server/services/channels/profile/creatorCodes"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const upsertCode = createController().mutation("", {
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
