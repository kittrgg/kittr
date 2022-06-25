import { createRouter } from "@Server/createRouter"
import { KitsController } from "@Server/controllers/kits"
import { kitsBasesRouter } from "./bases"
import { kitsOptionsRouter } from "./options"

export const kitsRouter = createRouter().merge("bases/", kitsBasesRouter)
.merge("options/", kitsOptionsRouter)
.merge("count", KitsController.countKits)
