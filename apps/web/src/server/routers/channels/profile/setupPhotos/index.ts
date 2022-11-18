import { ChannelsProfileSetupPhotosController } from "@Server/controllers/channels/profile/setupPhotos"
import { createRouter } from "@Server/createRouter"

export const channelsSetupPhotosRouter = createRouter().merge(
	"update",
	ChannelsProfileSetupPhotosController.updateSetupPhotos
)
