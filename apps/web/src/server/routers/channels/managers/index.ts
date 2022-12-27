import { channelsManagersOwnersRouter } from "./owners"
import { ChannelsManagersController } from "@Server/controllers/channels/managers"
import { createRouter } from "@Server/createRouter"

export const channelsManagersRouter = createRouter()
	.merge("owner/", channelsManagersOwnersRouter)
	.merge("list", ChannelsManagersController.listManagers)
	.merge("create", ChannelsManagersController.createManager)
	.merge("demote", ChannelsManagersController.demoteManager)
	.merge("promote", ChannelsManagersController.promoteManager)
	.merge("delete", ChannelsManagersController.deleteManager)
