import Footer from "../Footer"
import NavMenu from "../NavMenu"
import AdUnits from "./AdUnits"
import { Head, SupportUs } from "@Components/shared"
import { ErrorBoundary } from "@Components/shared/ErrorBoundary"
import { useDetectAdBlock } from "@Hooks/useDetectAdBlock"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { Grid } from "@mantine/core"
import { useRouter } from "next/router"
import { useState, useEffect, ReactNode } from "react"

interface Props {
	/** If you'd like to remove the ads from this page, set this to false. Defaults to true. */
	withAds?: boolean
	/** Head title for meta information */
	title: string
	/** Head description for meta information */
	description: string
	/** React children to render for content of page. */
	children: ReactNode
}

/** Main page layout.
 *
 * Includes right sidebar containing ads when appropriate for client width.
 *
 * Ad units meant to be placed above/below/within content must be written into the content itself!
 *
 * Also detects for adblock and presents a "Support Us" message.
 */
const AdPageWrapper = ({ withAds = true, title, description, children }: Props) => {
	const [top, setTop] = useState("")
	const { width } = useViewportDimensions()
	const adBlock = useDetectAdBlock()
	const { pathname } = useRouter()

	useEffect(() => {
		if (pathname?.includes("games")) {
			setTop("13.5%")
		}
		if (pathname?.includes("channels")) {
			setTop("5.6%")
		}
		if (pathname?.includes("channels/search")) {
			setTop("2.6%")
		}
	}, [pathname])

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				position: "relative",
				minHeight: "100vh",
				marginTop: "100px"
			}}
		>
			<Head title={title} description={description} />
			<NavMenu />
			<Grid grow>
				<Grid.Col span={8} pb="18px">
					<ErrorBoundary>{children}</ErrorBoundary>
				</Grid.Col>
				{withAds && width > 1200 && (
					<Grid.Col span={1}>
						<Image
							src="/media/sidebar-background.svg"
							sx={{ position: "absolute", top: -0, right: "0%", zIndex: -1, width: "20%" }}
							alt="sidebar-bg"
						/>
						{adBlock ? <SupportUs containerStyles={{ position: "relative", top, right: "12px" }} /> : <AdUnits />}
					</Grid.Col>
				)}
			</Grid>
			<Footer />
		</div>
	)
}

export default AdPageWrapper
