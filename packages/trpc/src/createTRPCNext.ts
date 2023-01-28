import { AppRouter } from "../"
import { getToken } from "@kittr/firebase/auth"
import { QueryClientConfig } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"
import { loggerLink } from "@trpc/client/links/loggerLink"
import { createTRPCNext as trpcNext } from "@trpc/next"
import superjson from "superjson"

interface Params {
	url: string
	fetch?: any
	queryClientConfig?: QueryClientConfig
}

export const trpc = ({ url, fetch, queryClientConfig }: Params) =>
	trpcNext<AppRouter>({
		config() {
			return {
				url,
				fetch,
				transformer: superjson,
				links: [
					// adds pretty logs to your console in development and logs errors in production
					loggerLink({
						enabled: (opts) =>
							process.env.NODE_ENV === "development" ||
							(opts.direction === "down" && opts.result instanceof Error)
					}),
					httpBatchLink({
						url,
						headers: async () => ({
							authorization: await getToken()
						})
					})
				],
				queryClientConfig
			}
		}
		// ssr: true,
	})
