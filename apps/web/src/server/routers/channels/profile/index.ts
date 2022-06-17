import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsAffiliatesRouter } from "./affiliates"
import { channelsCreatorCodesRouter } from "./creatorCodes"
import { channelsPcSpecsRouter } from "./pcSpecs"
import { youtubeAutoplayRouter } from "./youtubeAutoplay"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsAffiliatesRouter)
	.merge("pc-specs/", channelsPcSpecsRouter)
	.merge("creator-codes/", channelsCreatorCodesRouter)
	.merge("youtube-autoplay/", youtubeAutoplayRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
