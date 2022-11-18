import { createRouter } from "@Server/createRouter"
import { managersChannelsRouter } from "./channels"

export const managersRouter = createRouter().merge("channels/", managersChannelsRouter)
