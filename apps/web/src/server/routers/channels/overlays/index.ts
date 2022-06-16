import { createRouter } from "@Server/createRouter"
import { ChannelsOverlaysController } from "@Server/controllers/channels/overlays"

export const channelsOverlayRouter = createRouter()
	// .merge("update", ChannelsOverlaysController.update)
	.merge("color/edit", ChannelsOverlaysController.editColor)
	.merge("toggle", ChannelsOverlaysController.toggle)
