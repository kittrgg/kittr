import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsProfileAffiliateRouter } from "@Server/routers/channels/profile/affiliate"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsProfileAffiliateRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
