import { createRouter } from "@Server/createRouter"
import { KitsController } from "@Server/controllers/kits"
import { kitsBasesRouter } from "./bases"

export const kitsRouter = createRouter().merge("bases/", kitsBasesRouter).merge("count", KitsController.countKits)
