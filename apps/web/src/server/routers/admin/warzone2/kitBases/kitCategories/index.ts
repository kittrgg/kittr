import { Warzone2AdminController } from "@Server/controllers/admin/warzone2/index"
import { createRouter } from "@Server/createRouter"

export const categoriesRouter = createRouter().merge("list", Warzone2AdminController.listKitBaseCategories)
