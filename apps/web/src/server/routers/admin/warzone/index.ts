import { WarzoneAdminController } from "@Server/controllers/admin/warzone/index"
import { createRouter } from "@Server/createRouter"

export const warzoneAdminRouter = createRouter().merge("kit-bases/list", WarzoneAdminController.listKitBases)
