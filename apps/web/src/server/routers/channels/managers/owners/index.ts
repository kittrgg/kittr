import { ChannelsManagersOwnersController } from "@Server/controllers/channels/managers/owners"
import { createRouter } from "@Server/createRouter"

export const channelsManagersOwnersRouter = createRouter().merge("edit", ChannelsManagersOwnersController.editOwner)
