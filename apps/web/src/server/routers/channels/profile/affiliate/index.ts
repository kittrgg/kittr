import { ChannelsProfileAffiliatesController } from "@Server/controllers/channels/profile/affiliates"
import { createRouter } from "@Server/createRouter"

export const channelsProfileAffiliateRouter = createRouter()
	.merge("create", ChannelsProfileAffiliatesController.createAffiliate)
	.merge("update", ChannelsProfileAffiliatesController.updateAffiliate)
	.merge("delete", ChannelsProfileAffiliatesController.deleteAffiliate)
