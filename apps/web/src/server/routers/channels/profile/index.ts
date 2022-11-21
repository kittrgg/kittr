import { channelsAffiliatesRouter } from "./affiliates"
import { channelsProfileBrandColorsRouter } from "./brandColors"
import { channelsProfileCoverPhotoRouter } from "./coverPhoto"
import { channelsCreatorCodesRouter } from "./creatorCodes"
import { channelsProfileImageRouter } from "./image"
import { channelsPcSpecsRouter } from "./pcSpecs"
import { channelsSetupPhotosRouter } from "./setupPhotos"
import { youtubeAutoplayRouter } from "./youtubeAutoplay"
import { ChannelsProfileController } from "@Server/controllers/channels/profile"
import { createRouter } from "@Server/createRouter"

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
