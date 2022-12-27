import { ChannelsProfileImageController } from "@Server/controllers/channels/profile/image"
import { createRouter } from "@Server/createRouter"

export const channelsProfileImageRouter = createRouter().merge(
	"update",
	ChannelsProfileImageController.updateProfileImage
)
