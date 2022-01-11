import { useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"

import { header1 } from "@Styles/typography"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { useDetectAdBlock } from "@Hooks/useDetectAdBlock"
import NavMenu from "../NavMenu"
import Footer from "../Footer"
import { Head, SupportUs } from "@Components/shared"
import AdUnits from "./AdUnits"

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
		if (pathname?.includes("blog")) {
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
			<Grid>
				<ContentColumn>{children}</ContentColumn>
				{withAds && width > 1200 && (
					<AdvertisingColumn>
						<BackgroundImage src="/media/sidebar-background.svg" />
						{adBlock ? <SupportUs containerStyles={{ position: "relative", top, right: "12px" }} /> : <AdUnits />}
					</AdvertisingColumn>
				)}
			</Grid>
			<Footer />
		</div>
	)
}

export default AdPageWrapper

// Styled Components

export const H1 = styled.h1`
	margin: 12px 0;
	padding: 0 5%;
	${header1};
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 320px;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	} ;
`

const ContentColumn = styled.div`
	padding-bottom: 18px;
`

const AdvertisingColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	padding: 10px;
	overflow: hidden;
`

const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	right: -50%;
	width: 125%;
	z-index: -1;
`
