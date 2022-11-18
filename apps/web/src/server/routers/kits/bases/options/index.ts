import { createRouter } from "@Server/createRouter"
import { KitsBasesOptionsController } from "@Server/controllers/kits/bases/options"

export const optionsRouter = createRouter().merge("list", KitsBasesOptionsController.list)
