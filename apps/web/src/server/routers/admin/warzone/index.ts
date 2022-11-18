import { createRouter } from "@Server/createRouter"
import { warzoneKitBaseRouter } from "./kitBases"

export const warzoneAdminRouter = createRouter().merge("kit-bases/", warzoneKitBaseRouter)
