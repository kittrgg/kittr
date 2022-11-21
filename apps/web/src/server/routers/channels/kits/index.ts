import { ChannelsKitsController } from "@Server/controllers/channels/kits"
import { createRouter } from "@Server/createRouter"

export const channelsKitsRouter = createRouter()
	.merge("upsert", ChannelsKitsController.upsertKitToChannel)
	.merge("delete", ChannelsKitsController.deleteKitFromChannel)
