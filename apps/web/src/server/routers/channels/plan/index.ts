import { ChannelsPlanController } from "@Server/controllers/channels/plan"
import { createRouter } from "@Server/createRouter"

export const channelsPlanRouter = createRouter()
	.merge("get", ChannelsPlanController.getPlan)
	.merge("subscription-end", ChannelsPlanController.getSubscriptionEnd)
	.merge("card-last-4-digits", ChannelsPlanController.getCardLast4Digits)
