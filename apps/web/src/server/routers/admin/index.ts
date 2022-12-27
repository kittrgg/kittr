import { warzoneAdminRouter } from "./warzone"
import { warzone2AdminRouter } from "./warzone2"
import { createRouter } from "@Server/createRouter"
import { logInfo } from "@kittr/logger/node"

export const adminRouter = createRouter()
	.merge("warzone/", warzoneAdminRouter)
	.merge("warzone2/", warzone2AdminRouter)
	.query("logger-test", {
		resolve: () => {
			logInfo("Test error from tRPC.")
			return "tested"
		}
	})
