import { Warzone2AdminController } from "@Server/controllers/admin/warzone2/index"
import { createRouter } from "@Server/createRouter"

export const optionsRouter = createRouter()
	.merge("update", Warzone2AdminController.updateOption)
	.merge("create", Warzone2AdminController.createOption)
	.merge("delete", Warzone2AdminController.deleteOption)

