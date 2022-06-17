import { ChannelsProfileAffiliatesController } from "@Server/controllers/channels/profile/affiliates"
import { createRouter } from "@Server/createRouter"

export const channelsAffiliatesRouter = createRouter()
	.merge("upsert", ChannelsProfileAffiliatesController.updateAffiliate)
	.merge("delete", ChannelsProfileAffiliatesController.deleteAffiliate)
