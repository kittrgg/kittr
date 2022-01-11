import { ReactNode } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { caption, header1 } from "@Styles/typography"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import NavMenu from "./NavMenu"
import Footer from "./Footer"
import Ad from "@Services/venatus/Ad"
import { Head } from "@Components/shared/Head"

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
 */
const AdPageWrapper = ({ withAds = true, title, description, children }: Props) => {
	const { width } = useViewportDimensions()

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
				<div className="venatus-placement-right-sticky">
					<ContentColumn>{children}</ContentColumn>
				</div>
				{withAds && width > 1200 && (
					<AdvertisingColumn>
						<BackgroundImage src="/media/sidebar-background.svg" />
						<Caption>
							Ads are annoying but keep this site running. Thank you for understanding.
							<br />- The Guy That Makes kittr
						</Caption>
						<Ad placementType="rmStickyRight" />
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

	/* @media(min-width: 1500px) {
        grid-template-columns: 1fr 530px;
    } */

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	} ;
`

const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	right: -50%;
	width: 125%;
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

const Caption = styled.p`
	margin-bottom: 12px;
	${caption}
	color: ${colors.lightest};
`
