import styled from "styled-components"
import colors from "@Colors"
import * as Styled from "./style"
import CallToAction from "./CallToAction"
import { barlow, header2, paragraph } from "@Styles/typography"

const WINNERS = [
	{
		icon: "/media/icons/channeler.svg",
		iconAlt: "Channeler Icon",
		title: "CHANNELERS",
		text: "Increased professionalism, a sleeker viewer experience, and more YouTube views if you're into them. Yup. Let kittr help your channel reach its potential with about 15 minutes of effort from you or a mod."
	},
	{
		icon: "/media/icons/mod.svg",
		iconAlt: "Mod Icon",
		title: "MODS",
		text: "kittr makes it easier to create, edit, and collaborate live easier than a Google Sheet. No typos, no trying to style it up, and comically easy chat command updates. We took care of ALL of that for you. Now get back to wrangling chat!"
	},
	{
		icon: "/media/icons/viewer.svg",
		iconAlt: "Viewer Icon",
		title: "VIEWERS",
		text: "kittr is easier to read than a Google Sheet. It's also cooler to look at. And it makes it easier to watch your Youtube content if you have some. Viewers from all corners of Twitch have told us they like kittr more than any other option to find out about loadouts."
	},
	{
		icon: "/media/icons/us.svg",
		iconAlt: "Us Icon",
		title: "US",
		text: "This is a passion project of just two Twitch viewers that saw a way that the Twitch ecosystem could improve. We're working hard to make our favorite platform even better for everyone that is a part of its community."
	}
]

const Winners = ({ ...props }) => {
	return (
		<>
			<Styled.H2>WHO LOVES KITTR?</Styled.H2>
			<Grid>
				{WINNERS.map(({ title, text, icon, iconAlt }) => {
					return (
						<GridItem key={title}>
							<GridItemTopRow>
								<GridIconContainer>
									<img src={icon} alt={iconAlt} width="40px" height="40px" />
								</GridIconContainer>
								<GridTitle>{title}</GridTitle>
							</GridItemTopRow>
							<GridText>{text}</GridText>
						</GridItem>
					)
				})}
			</Grid>
			<CallToAction marginTop="48px" marginBottom="48px" header="get started with kittr." />
		</>
	)
}

export default Winners

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 96px;
	grid-row-gap: 96px;
	margin: 24px 60px;

	@media (max-width: 750px) {
		grid-template-columns: 100%;
		grid-row-gap: 40px;
		margin: 24px 0;
	}
`

const GridItem = styled.div``

const GridItemTopRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 8px;
`

const GridIconContainer = styled.div`
	@media (max-width: 750px) {
		margin-left: 0;
	}
`

const GridTitle = styled.h3`
	${header2};
	${barlow};
	margin-left: 12px;
	font-size: 32px;
	font-weight: 600;
	color: ${colors.white};
`

const GridText = styled.p`
	${paragraph};
	line-height: 150%;
`
