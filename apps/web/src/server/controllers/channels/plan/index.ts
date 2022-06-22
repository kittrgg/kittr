import { createController } from "@Server/createController"
import * as ChannelsPlanService from "@Server/services/channels/plan"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const getPlan = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const result = await ChannelsPlanService.getPlan(id)
		return result
	}
})

const getSubscriptionEnd = createController().query("", {
	input: z.string().optional(),
	async resolve({ input: stripeSubscriptionId }) {
		if (!stripeSubscriptionId) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "Couldn't find subscription id."
			})
		}

		const result = await ChannelsPlanService.getSubscriptionEnd(stripeSubscriptionId)
		return result
	}
})

const getCardLast4Digits = createController().query("", {
	input: z.string().optional(),
	async resolve({ input: stripeSubscriptionId }) {
		if (!stripeSubscriptionId) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "Couldn't find subscription id."
			})
		}

		const result = await ChannelsPlanService.getCardLast4Digits(stripeSubscriptionId)
		return result
	}
})

export const ChannelsPlanController = {
	getPlan,
	getSubscriptionEnd,
	getCardLast4Digits
}
