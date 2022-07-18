import FallbackPage from "@Components/layouts/FallbackPage"
import { MantineProvider } from "@kittr/ui"
import { Global } from "@mantine/core"
import { setFallbackLoader } from "@Redux/slices/global"
import { store, useDispatch, useSelector } from "@Redux/store"
import GlobalStyles from "@Styles/globals"
import OverlayStyles from "@Styles/overlay"
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"
import { loggerLink } from "@trpc/client/links/loggerLink"
import { withTRPC } from "@trpc/next"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ReactQueryDevtools } from "react-query/devtools"
import { Provider } from "react-redux"
import superjson from "superjson"
import { AppRouter } from "./api/trpc/[[...trpc]].api"
import { getToken } from "@Services/firebase/auth"

const AppWrap = ({ Component, pageProps }: any) => (
		<Provider store={store}>
			<MyApp Component={Component} pageProps={pageProps} />
		</Provider>
	)

const MyApp = ({ Component, pageProps }: any) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const isFallback = useSelector((state) => state.global.fallbackLoader)

	useEffect(() => {
		router.events.on("routeChangeStart", (url) => {
			if (url !== window.location.pathname) {
				;(window as any).routeTimeout = setTimeout(() => {
					dispatch(setFallbackLoader(true)), 500
				})
			}
		})

		router.events.on("routeChangeComplete", () => {
			clearTimeout((window as any).routeTimeout)
			dispatch(setFallbackLoader(false))
		})
	}, [router.events, dispatch])

	return (
		<MantineProvider>
			<Global
				styles={() => ({
					"body": {
						// This is because the desktop footers for Venatus try to buy themselves space.
						// We will handle this manually if we need to.
						marginBottom: "0 !important"
					},
					// Make sure that Venatus ads are always a minimum of 320px wide.
					"[data-ref=\"vm-preloader\"]": {
						minWidth: "320px !important"
					},
					// // This hides a warning about how you are using firebase emulators
					".firebase-emulator-warning": {
						display: "none"
					}
				})}
			/>

			{router.route === Routes.CHANNEL.GAME.createOverlayPath("[channel]", "[game]") ? (
				<OverlayStyles />
			) : (
				<GlobalStyles />
			)}
			{isFallback && <FallbackPage />}
			{!isFallback && <Component {...pageProps} />}
			<ReactQueryDevtools />
		</MantineProvider>
	)
}

export default withTRPC<AppRouter>({
	config ({}) {
		/*
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = (process.env.NEXT_PUBLIC_SOCKET_HOST as string)?.includes("stage")
			? "https://stage-web.kittr.gg/api/trpc"
			: (process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL as string)?.includes("prod")
			? "https://kittr.gg/api/trpc"
			: "http://localhost:3000/api/trpc"

		return {
			url,
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
					enabled: (opts) => process.env.NODE_ENV === "development" || (opts.direction === "down" && opts.result instanceof Error)
				}),
				httpBatchLink({
					url
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
})(AppWrap)
