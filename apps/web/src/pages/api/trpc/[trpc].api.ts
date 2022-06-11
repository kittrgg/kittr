import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { createContext } from "@Utils/trpc"
import superjson from "superjson"
import { z } from "zod"

export const appRouter = trpc
	.router()
	.transformer(superjson)
	.query("hello", {
		input: z
			.object({
				text: z.string().nullish()
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `hello ${input?.text ?? "world"}`
			}
		}
	})

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
