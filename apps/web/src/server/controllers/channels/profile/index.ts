import { publicProcedure } from "@Server/initTRPC"
import * as ChannelsService from "@Server/services/channels"
import { z } from "zod"

const getChannelProfile = publicProcedure.input(z.string()).query(async ({ input }) => {
	const channel = await ChannelsService.getChannelProfileByUrlSafeName(input)
	return channel
})

export const ChannelsProfileController = {
	getChannelProfile
}
