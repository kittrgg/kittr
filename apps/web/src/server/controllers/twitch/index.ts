import { createController } from "@Server/createController"
import * as TwitchService from "@Server/services/twitch"
import { z } from "zod"

const getProfile = createController().query("", {
	input: z.string(),
	async resolve({ input }) {
		const result = await TwitchService.getProfile(input)
		return result
	}
})

export const TwitchController = {
	getProfile
}
