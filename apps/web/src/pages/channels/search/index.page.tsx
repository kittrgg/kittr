import AdPageWrapper from "@Components/layouts/AdPageWrapper"
// Import { ChannelSearch } from "@Components/shared"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Title } from "@kittr/ui"
import styled from "styled-components"

function ChannelsSearch() {
	return (
		<AdPageWrapper description="Who ya got? | kittr" title="Search | kittr">
			<ResponsiveBanner />
			{/* <ChannelSearch /> */}
			<Title preset="h1">CHANNELS</Title>
			<Paragraph>Enter a search term.</Paragraph>
		</AdPageWrapper>
	)
}

export default ChannelsSearch

// Styled Components

const Paragraph = styled.p`
	display: inline-block;
	margin: 10px auto;
	padding: 20px;
	text-align: left;
`
