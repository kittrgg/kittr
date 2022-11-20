import { WarzoneAdminController } from "@Server/controllers/admin/warzone/index"
import { createRouter } from "@Server/createRouter"

export const categoriesRouter = createRouter().merge("list", WarzoneAdminController.listKitBaseCategories)
