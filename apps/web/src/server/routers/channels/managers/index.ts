import { createRouter } from "@Server/createRouter"
import { channelsManagersOwnersRouter } from "./owners"
import { ChannelsManagersController } from "@Server/controllers/channels/managers"

export const channelsManagersRouter = createRouter()
	.merge("owner/", channelsManagersOwnersRouter)
	.merge("demote", ChannelsManagersController.demoteManager)
	.merge("promote", ChannelsManagersController.promoteManager)
