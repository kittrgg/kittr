import { Context } from "./context"
import * as trpc from "@trpc/server"

/**
 * Helper function to create a router with context
 * Yes, this is exactly the createRouter file.
 * But the naming makes controllers feel more like controllers.
 */
export function createController() {
	return trpc.router<Context>()
}
