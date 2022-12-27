import { ChannelsKitsController } from "@Server/controllers/channels/kits"
import { createRouter } from "@Server/createRouter"

export const channelsKitsRouter = createRouter()
	.merge("upsert", ChannelsKitsController.upsertKitToChannel)
	.merge("upsertWz2Kit", ChannelsKitsController.upsertWz2KitToChannel)
	.merge("delete", ChannelsKitsController.deleteKitFromChannel)
