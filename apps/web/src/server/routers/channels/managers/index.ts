import { createRouter } from "@Server/createRouter"
import { channelsManagersOwnersRouter } from "./owners"

export const channelsManagersRouter = createRouter().merge("owner/", channelsManagersOwnersRouter)
