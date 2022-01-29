import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import styled from "styled-components"

const PROPERTIES = [
	{
		image: "/media/icons/discord.svg",
		imageAlt: "Discord Icon",
		title: "DISCORD",
		primaryText: "JOIN SERVER",
		primaryLink: Routes.DISCORD,
		secondaryText: "MESSAGE #general",
		secondaryLink: Routes.DISCORD
	},
	{
		image: "/media/icons/twitter.svg",
		imageAlt: "Twitter Icon",
		title: "TWITTER",
		primaryText: "FOLLOW US",
		primaryLink: Routes.TWITTER,
		secondaryText: "SEND A DM",
		secondaryLink: Routes.TWITTER_DM
	}
]

/** Features tiles on how to contact us with links if applicable. */
export const ContactUs = ({ ...props }) => {
	return (
		<Grid>
			{PROPERTIES.map((property) => {
				return (
					<GridItem key={property.title}>
						<img src={property.image} alt={property.imageAlt} width={75} height={75} />
						<Title>{property.title}</Title>
						<LinkButton href={property.primaryLink} target="_blank" rel="noopener noreferrer">
							{property.primaryText}
						</LinkButton>
						<SecondaryLinkButton href={property.secondaryLink} target="_blank" rel="noopener noreferrer">
							{property.secondaryText}
						</SecondaryLinkButton>
					</GridItem>
				)
			})}
		</Grid>
	)
}

export default ContactUs

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	width: 80%;
	min-width: 260px;
	margin: 0 auto;

	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
`

const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 50px 10%;
	background-color: ${colors.dark20};
	border-radius: 10px;
`

const Title = styled.h2`
	margin: 56px 0;
	${header2};
`

const LinkButton = styled.a`
	padding: 20px 50px;
	border: 2px solid ${colors.white};
	border-radius: 20px;
	color: ${colors.white};
	${header2};
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	transition: 0.2s;

	@media (hover: hover) {
		&:hover {
			background-color: ${colors.white};
			color: ${colors.middle};
		}
	}
`

const SecondaryLinkButton = styled.a`
	margin-top: 60px;
	${header2};
	font-size: 18px;
	color: ${colors.lighter};
	text-decoration: none;
	text-align: center;
	transition: 0.2s;

	@media (hover: hover) {
		&:hover {
			color: ${colors.white};
		}
	}
`
