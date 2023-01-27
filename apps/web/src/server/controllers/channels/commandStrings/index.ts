import { authedProcedure, publicProcedure } from "@Server/initTRPC"
import * as ChannelsCommandStringsService from "@Server/services/channels/commandStrings"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const getCommandString = publicProcedure
	.input(
		z.object({
			channelId: z.string()
		})
	)
	.mutation(async ({ input }) => {
		const channel = await ChannelsCommandStringsService.getCommandString(input)
		return channel
	})

const upsertCommandString = authedProcedure
	.input(
		z.object({
			commandStringId: z.string().optional(),
			channelId: z.string(),
			newString: z.string(),
			gameId: z.string()
		})
	)
	.mutation(async ({ ctx, input }) => {
		await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER", "ADMIN"] })

		const channel = await ChannelsCommandStringsService.upsertCommandString({
			gameId: input.gameId,
			commandStringId: input.commandStringId,
			channelId: input.channelId,
			newString: input.newString
		})
		return channel
	})

export const ChannelsCommandStringsController = {
	getCommandString,
	upsertCommandString
}
