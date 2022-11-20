import { ManagersChannelsController } from "@Server/controllers/managers/channels"
import { createRouter } from "@Server/createRouter"

export const managersChannelsRouter = createRouter().merge("list", ManagersChannelsController.listChannels)
