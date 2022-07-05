import { createRouter } from "@Server/createRouter"
import { warzoneAdminRouter } from "./warzone"
import { logInfo } from '@kittr/logger/node'

export const adminRouter = createRouter()
  .merge("warzone/", warzoneAdminRouter)
  .query("logger-test", {
    resolve: () => {
      logInfo("Test error from tRPC.")
      return "tested"
    }
  })
