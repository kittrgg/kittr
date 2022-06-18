import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsAffiliatesRouter } from "./affiliates"
import { channelsProfileBrandColorsRouter } from "./brandColors"
import { channelsCreatorCodesRouter } from "./creatorCodes"
import { channelsPcSpecsRouter } from "./pcSpecs"
import { youtubeAutoplayRouter } from "./youtubeAutoplay"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsAffiliatesRouter)
	.merge("pc-specs/", channelsPcSpecsRouter)
	.merge("creator-codes/", channelsCreatorCodesRouter)
	.merge("youtube-autoplay/", youtubeAutoplayRouter)
	.merge("brand-color/", channelsProfileBrandColorsRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
