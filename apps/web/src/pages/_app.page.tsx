import { AppRouter } from "./api/trpc/[[...trpc]].api"
// import FallbackPage from "@Components/layouts/FallbackPage"
// import { setFallbackLoader } from "@Redux/slices/global"
import { store } from "@Redux/store"
import { getToken } from "@Services/firebase/auth"
import GlobalStyles from "@Styles/globals"
import OverlayStyles from "@Styles/overlay"
import { getTrpcUrl } from "@Utils/helpers/getUrl"
import { Routes } from "@Utils/lookups/routes"
import { MantineProvider } from "@kittr/ui"
import { Global } from "@mantine/core"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"
import { loggerLink } from "@trpc/client/links/loggerLink"
import { createTRPCNext } from "@trpc/next"
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import superjson from "superjson"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp = ({ Component, pageProps }: { Component: React.FC; pageProps: Record<any, any> }) => {
	const router = useRouter()

	return (
		<Provider store={store}>
			<MantineProvider>
				<Global
					styles={() => ({
						"body": {
							// This is because the desktop footers for Venatus try to buy themselves space.
							// We will handle this manually if we need to.
							marginBottom: "0 !important"
						},
						// Make sure that Venatus ads are always a minimum of 320px wide.
						'[data-ref="vm-preloader"]': {
							minWidth: "320px !important"
						}
					})}
				/>

				{router.route === Routes.CHANNEL.GAME.createOverlayPath("[channel]", "[game]") ? (
					<OverlayStyles />
				) : (
					<GlobalStyles />
				)}
				{/* {isFallback && <FallbackPage />}
			{!isFallback && <Component {...pageProps} />} */}
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</MantineProvider>
		</Provider>
	)
}

export const trpc = createTRPCNext<AppRouter>({
	config({}) {
		/*
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		return {
			getUrl: getTrpcUrl,
			transformer: superjson,
			links: [
				// adds pretty logs to your console in development and logs errors in production
				loggerLink({
					enabled: (opts) =>
						process.env.VERCEL_ENV !== "production" || (opts.direction === "down" && opts.result instanceof Error)
				}),
				httpBatchLink({
					url: getTrpcUrl,
					headers: async () => ({
						authorization: await getToken()
					})
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

export default trpc.withTRPC(MyApp)
