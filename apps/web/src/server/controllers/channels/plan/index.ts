import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsPlanService from "@Server/services/channels/plan"
import { checkRole } from "@Server/services/users"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

const getPlan = createController().query("", {
	input: z.string(),
	async resolve({ input: id }) {
		const result = await ChannelsPlanService.getPlan(id)
		return result
	}
})

const getSubscriptionEnd = createController()
	.middleware(authenticateUser)
	.query("", {
		input: z.object({ channelId: z.string(), stripeSubscriptionId: z.string().optional() }),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			if (!input.stripeSubscriptionId) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "Couldn't find subscription id."
				})
			}

			const result = await ChannelsPlanService.getSubscriptionEnd(input.stripeSubscriptionId)
			return result
		}
	})

const getCardLast4Digits = createController()
	.middleware(authenticateUser)
	.query("", {
		input: z.object({ channelId: z.string(), stripeSubscriptionId: z.string().optional() }),
		async resolve({ ctx, input }) {
			await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["ADMIN", "EDITOR", "OWNER"] })

			if (!input.stripeSubscriptionId) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "Couldn't find subscription id."
				})
			}

			const result = await ChannelsPlanService.getCardLast4Digits(input.stripeSubscriptionId)
			return result
		}
	})

export const ChannelsPlanController = {
	getPlan,
	getSubscriptionEnd,
	getCardLast4Digits
}
