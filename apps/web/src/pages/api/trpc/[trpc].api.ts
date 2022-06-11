import * as trpcNext from "@trpc/server/adapters/next"
import { createContext } from "@Utils/trpc"
import { appRouter } from "@Server/index"

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: createContext,
	batching: {
		enabled: true
	}
})
