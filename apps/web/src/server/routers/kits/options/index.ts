import { createRouter } from "@Server/createRouter"
import { KitsOptionsController } from "@Server/controllers/kits/options"

export const kitsOptionsRouter = createRouter()
.merge("list", KitsOptionsController.list)
