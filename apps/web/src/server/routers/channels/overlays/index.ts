import { ChannelsOverlaysController } from "@Server/controllers/channels/overlays"
import { createRouter } from "@Server/createRouter"

export const channelsOverlayRouter = createRouter()
	.merge("color/edit", ChannelsOverlaysController.editColor)
	.merge("kit/edit", ChannelsOverlaysController.editKit)
	.merge("toggle", ChannelsOverlaysController.toggle)
	.merge("get", ChannelsOverlaysController.getOverlay)
