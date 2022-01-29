import FallbackPage from "@Components/layouts/FallbackPage"
import { setFallbackLoader } from "@Redux/slices/global"
import { store, useDispatch, useSelector } from "@Redux/store"
import { RollbarProvider } from "@Services/rollbar/Provider"
import GlobalStyles from "@Styles/globals"
import OverlayStyles from "@Styles/overlay"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Provider } from "react-redux"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0
		}
	}
})

const AppWrap = ({ Component, pageProps }: any) => {
	return (
		<RollbarProvider>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<MyApp Component={Component} pageProps={pageProps} />
				</Provider>
			</QueryClientProvider>
		</RollbarProvider>
	)
}

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
		<>
			{router.route === Routes.CHANNEL.GAME.createOverlayPath("[channel]", "[game]") ? (
				<OverlayStyles />
			) : (
				<GlobalStyles />
			)}
			{isFallback && <FallbackPage />}
			{!isFallback && <Component {...pageProps} />}
			<ReactQueryDevtools />
		</>
	)
}

export default AppWrap
