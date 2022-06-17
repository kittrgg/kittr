import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsAffiliatesRouter } from "./affiliates"
import { channelsPcSpecsRouter } from "./pcSpecs"
import { channelsCreatorCodesRouter } from "./creatorCodes"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsAffiliatesRouter)
	.merge("pc-specs/", channelsPcSpecsRouter)
	.merge("creator-codes", channelsCreatorCodesRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
