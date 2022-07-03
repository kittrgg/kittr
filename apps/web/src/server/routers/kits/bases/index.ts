import { KitsBasesController } from "@Server/controllers/kits/bases"
import { createRouter } from "@Server/createRouter"
import { optionsRouter } from "@Server/routers/kits/bases/options"

export const kitsBasesRouter = createRouter()
  .merge("options/", optionsRouter)
  .merge("list", KitsBasesController.listBases)
  .merge("game/list", KitsBasesController.listGameBases)
