import { trpc } from "@/lib/trpc"
import { store } from "@Redux/store"
import GlobalStyles from "@Styles/globals"
import OverlayStyles from "@Styles/overlay"
import { Routes } from "@Utils/lookups/routes"
import { Analytics } from "@kittr/analytics"
import { MantineProvider } from "@kittr/ui"
import { Global } from "@mantine/core"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useRouter } from "next/router"
import { Provider } from "react-redux"

const thing = "fart"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp = ({ Component, pageProps }: { Component: React.FC; pageProps: Record<any, any> }) => {
	const router = useRouter()

	return (
		<Provider store={store}>
			<Analytics />
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
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</MantineProvider>
		</Provider>
	)
}

export default trpc.withTRPC(MyApp)
