import { appRouter , createContext } from "@kittr/trpc"
import { withSentry } from "@sentry/nextjs"
import * as trpcNext from "@trpc/server/adapters/next"

// Export type definition of API
export type AppRouter = typeof appRouter

// Export API handler
export default withSentry(
	trpcNext.createNextApiHandler({
		router: appRouter,
		createContext,
		batching: {
			enabled: true
		}
	})
)
