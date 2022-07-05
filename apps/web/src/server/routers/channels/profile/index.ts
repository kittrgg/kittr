import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"
import { channelsAffiliatesRouter } from "./affiliates"
import { channelsProfileBrandColorsRouter } from "./brandColors"
import { channelsCreatorCodesRouter } from "./creatorCodes"
import { channelsProfileImageRouter } from "./image"
import { channelsPcSpecsRouter } from "./pcSpecs"
import { channelsSetupPhotosRouter } from "./setupPhotos"
import { youtubeAutoplayRouter } from "./youtubeAutoplay"
import { channelsProfileCoverPhotoRouter } from "./coverPhoto"

export const channelsProfileRouter = createRouter()
	.merge("affiliates/", channelsAffiliatesRouter)
	.merge("pc-specs/", channelsPcSpecsRouter)
	.merge("creator-codes/", channelsCreatorCodesRouter)
	.merge("youtube-autoplay/", youtubeAutoplayRouter)
	.merge("brand-color/", channelsProfileBrandColorsRouter)
	.merge("setup-photos/", channelsSetupPhotosRouter)
	.merge("image/", channelsProfileImageRouter)
	.merge("cover-photo/", channelsProfileCoverPhotoRouter)
	.merge("get", ChannelsProfileController.getChannelProfile)
