import { createRouter } from "@Server/createRouter"
import { warzone2KitBaseRouter } from "./kitBases"

export const warzone2AdminRouter = createRouter().merge("kit-bases/", warzone2KitBaseRouter)
