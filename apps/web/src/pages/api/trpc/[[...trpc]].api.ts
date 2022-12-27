import { createContext } from "@Server/context"
import { appRouter } from "@Server/index"
import { withSentry } from "@sentry/nextjs"
import * as trpcNext from "@trpc/server/adapters/next"

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default withSentry(
	trpcNext.createNextApiHandler({
		router: appRouter,
		createContext,
		batching: {
			enabled: true
		}
	})
)
