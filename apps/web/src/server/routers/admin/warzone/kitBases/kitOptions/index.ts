import { WarzoneAdminController } from "@Server/controllers/admin/warzone/index"
import { createRouter } from "@Server/createRouter"

export const optionsRouter = createRouter()
  .merge("update", WarzoneAdminController.updateOption)
  .merge("create", WarzoneAdminController.createOption)
  .merge("delete", WarzoneAdminController.deleteOption)
