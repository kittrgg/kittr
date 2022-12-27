import { KitsBasesOptionsController } from "@Server/controllers/kits/bases/options"
import { createRouter } from "@Server/createRouter"

export const optionsRouter = createRouter().merge("list", KitsBasesOptionsController.list)
