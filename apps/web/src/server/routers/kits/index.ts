import { KitsController } from "@Server/controllers/kits"
import { createRouter } from "@Server/createRouter"

export const kitsRouter = createRouter().merge("count", KitsController.countKits)
