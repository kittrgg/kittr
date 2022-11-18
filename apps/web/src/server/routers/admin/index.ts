import { createRouter } from "@Server/createRouter"
import { warzoneAdminRouter } from "./warzone"
import { logInfo } from "@kittr/logger/node"
import { warzone2AdminRouter } from "./warzone2"

export const adminRouter = createRouter()
	.merge("warzone/", warzoneAdminRouter)
	.merge("warzone2/", warzone2AdminRouter)
	.query("logger-test", {
		resolve: () => {
			logInfo("Test error from tRPC.")
			return "tested"
		}
	})
