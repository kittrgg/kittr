import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsProfileAffiliateRouter } from "./affiliate"
import { channelsPcSpecsRouter } from "./pcSpecs"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsProfileAffiliateRouter)
	.merge("pc-specs/", channelsPcSpecsRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
