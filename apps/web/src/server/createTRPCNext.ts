import { AppRouter } from "../pages/api/trpc/[[...trpc]].api"
import { getToken } from "@Services/firebase/auth"
import { getTrpcUrl } from "@Utils/helpers/getUrl"
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"
import { loggerLink } from "@trpc/client/links/loggerLink"
import { createTRPCNext } from "@trpc/next"
import superjson from "superjson"

export const trpc = createTRPCNext<AppRouter>({
	config({}) {
		/*
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		return {
			getUrl: getTrpcUrl,
			headers: async () => ({
				authorization: await getToken()
			}),
			// fetch: async (requestUrl, test) => {
			// 	return fetch(requestUrl, {
			// 		...test,
			// 		headers: { ...test?.headers, authorization: (await getToken()) ?? "" }
			// 	})
			// },
			transformer: superjson,
			links: [
				// adds pretty logs to your console in development and logs errors in production
				loggerLink({
					enabled: (opts) =>
						process.env.VERCEL_ENV !== "production" || (opts.direction === "down" && opts.result instanceof Error)
				}),
				httpBatchLink({
					url: getTrpcUrl
				})
			],
			queryClientConfig: {
				defaultOptions: {
					queries: {
						refetchOnMount: false,
						refetchOnWindowFocus: false
					}
				}
			}
		}
	}
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	// ssr: true
})
