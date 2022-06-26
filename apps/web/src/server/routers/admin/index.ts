import { createRouter } from "@Server/createRouter"
import { warzoneAdminRouter } from "./warzone"

export const adminRouter = createRouter().merge("warzone", warzoneAdminRouter)
