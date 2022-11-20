import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import { ChannelSearch, ChannelList, Spinner } from "@Components/shared"
import { useChannelSearch } from "@Hooks/api/useChannelSearch"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { useRouter } from "next/router"
import styled from "styled-components"

const ChannelsSearch = () => {
	const { width } = useViewportDimensions()
	const {
		query: { searchTerm }
	} = useRouter()
	// const { data, isFetching } = useChannelSearch(searchTerm as string)

	// TODO: Re-enable search functionality!
	return <p>404</p>

	// return (
	// 	<AdPageWrapper
	// 		title={`Search Channels: ${searchTerm || "?"}`}
	// 		description={`Look for ${searchTerm || "?"} on kittr.`}
	// 	>
	// 		<ChannelSearch />
	// 		<H1>CHANNELS</H1>
	// 		{isFetching && <Spinner />}
	// 		{!isFetching && data && (
	// 			<>
	// 				<div style={{ margin: "0 5%" }}>
	// 					<ChannelList data={data.slice(0, 20)} />
	// 				</div>
	// 				{data.length > 20 && (
	// 					<ParagraphWrapper>
	// 						<Paragraph>
	// 							More than 20 channels matched your search. { "Didn't" }find who you were looking for? Refine your search term
	// 							a little.
	// 						</Paragraph>
	// 					</ParagraphWrapper>
	// 				)}
	// 				{data.length === 0 && (
	// 					<ParagraphWrapper>
	// 						<Paragraph>
	// 							Hmm, no matches there. You have to get within two characters to find who you are looking for.
	// 						</Paragraph>
	// 					</ParagraphWrapper>
	// 				)}
	// 			</>
	// 		)}
	// 		{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
	// 	</AdPageWrapper>
	// )
}

export default ChannelsSearch

// Styled Components

const ParagraphWrapper = styled.div`
	text-align: center;
`

const Paragraph = styled.p`
	display: inline-block;
	margin: 10px auto;
	padding: 20px;
	text-align: left;
`
