import { warzoneKitBaseRouter } from "./kitBases"
import { createRouter } from "@Server/createRouter"

export const warzoneAdminRouter = createRouter().merge("kit-bases/", warzoneKitBaseRouter)
