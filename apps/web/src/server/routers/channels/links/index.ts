import { ChannelsKitsController } from "@Server/controllers/channels/kits"
import { createRouter } from "@Server/createRouter"

export const channelsLinksRouter = createRouter()
	.merge("upsert", ChannelsKitsController.upsertKitToChannel)
