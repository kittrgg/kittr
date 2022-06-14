import { createRouter } from "@Server/createRouter"
import { KitsBasesController } from "@Server/controllers/kits/bases"

export const kitsBasesRouter = createRouter().merge("list", KitsBasesController.listBases)
