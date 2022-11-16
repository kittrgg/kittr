import { Warzone2AdminController } from "@Server/controllers/admin/warzone2/index"
import { createRouter } from "@Server/createRouter"
import { categoriesRouter } from "./kitCategories"
import { optionsRouter } from "./kitOptions"

export const warzone2KitBaseRouter = createRouter()
	.merge("options/", optionsRouter)
	.merge("categories/", categoriesRouter)
	.merge("list", Warzone2AdminController.listKitBases)
	.merge("get", Warzone2AdminController.getKitBase)
	.merge("create", Warzone2AdminController.createBase)
	.merge("update", Warzone2AdminController.updateBase)
	.merge("delete", Warzone2AdminController.deleteBase)

