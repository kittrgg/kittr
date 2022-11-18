import { createRouter } from "@Server/createRouter"
import { ChannelsManagersOwnersController } from "@Server/controllers/channels/managers/owners"

export const channelsManagersOwnersRouter = createRouter().merge("edit", ChannelsManagersOwnersController.editOwner)
