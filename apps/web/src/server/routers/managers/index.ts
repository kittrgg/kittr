import { managersChannelsRouter } from "./channels"
import { createRouter } from "@Server/createRouter"

export const managersRouter = createRouter().merge("channels/", managersChannelsRouter)
