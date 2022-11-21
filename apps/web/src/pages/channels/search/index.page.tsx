import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
// import { ChannelSearch } from "@Components/shared"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import styled from "styled-components"

const ChannelsSearch = () => (
	<AdPageWrapper title="Search | kittr" description="Who ya got? | kittr">
		<ResponsiveBanner />
		{/* <ChannelSearch /> */}
		<H1>CHANNELS</H1>
		<Paragraph>Enter a search term.</Paragraph>
	</AdPageWrapper>
)

export default ChannelsSearch

// Styled Components

const Paragraph = styled.p`
	display: inline-block;
	margin: 10px auto;
	padding: 20px;
	text-align: left;
`
