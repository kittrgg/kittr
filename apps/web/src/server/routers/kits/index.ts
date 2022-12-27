import { kitsBasesRouter } from "./bases"
import { KitsController } from "@Server/controllers/kits"
import { createRouter } from "@Server/createRouter"

export const kitsRouter = createRouter().merge("bases/", kitsBasesRouter).merge("count", KitsController.countKits)
