import { categoriesRouter } from "./kitCategories"
import { optionsRouter } from "./kitOptions"
import { WarzoneAdminController } from "@Server/controllers/admin/warzone/index"
import { createRouter } from "@Server/createRouter"

export const warzoneKitBaseRouter = createRouter()
	.merge("options/", optionsRouter)
	.merge("categories/", categoriesRouter)
	.merge("list", WarzoneAdminController.listKitBases)
	.merge("get", WarzoneAdminController.getKitBase)
	.merge("create", WarzoneAdminController.createBase)
	.merge("update", WarzoneAdminController.updateBase)
	.merge("delete", WarzoneAdminController.deleteBase)
