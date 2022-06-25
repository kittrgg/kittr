
import { ChannelsProfileCoverPhotoController } from "@Server/controllers/channels/profile/coverPhoto"
import { createRouter } from "@Server/createRouter"

export const channelsProfileCoverPhotoRouter = createRouter()
	.merge("update", ChannelsProfileCoverPhotoController.update)
