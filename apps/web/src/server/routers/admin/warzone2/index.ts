import { warzone2KitBaseRouter } from "./kitBases"
import { createRouter } from "@Server/createRouter"

export const warzone2AdminRouter = createRouter().merge("kit-bases/", warzone2KitBaseRouter)
