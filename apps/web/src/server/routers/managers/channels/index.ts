import { createRouter } from "@Server/createRouter"
import { ManagersChannelsController } from "@Server/controllers/managers/channels"

export const managersChannelsRouter = createRouter().merge("list", ManagersChannelsController.listChannels)
