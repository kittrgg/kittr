import { Box, Grid, Stack } from "@mantine/core"

import colors from "@Colors"
import { Routes } from "@Utils/lookups/routes"
import { Card, Title } from "@kittr/ui"
import Image from "next/image"
import Button from "./Button"

const PROPERTIES = [
	{
		id: 1,
		image: "/media/icons/discord.svg",
		imageAlt: "Discord Icon",
		title: "DISCORD",
		primaryText: "JOIN SERVER",
		primaryLink: Routes.DISCORD,
		secondaryText: "MESSAGE #general",
		secondaryLink: Routes.DISCORD
	},
	{
		id: 2,
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
		<Box style={{ width: "100%" }}>
			<Stack align={"center"} mb={40}>
				<Title preset="h1">CONTACT US</Title>
				<Title preset="h2" color={colors.lighter}>
					STILL HAVE QUESTIONS? WE'VE GOT YOUR BACK.
				</Title>
			</Stack>

			<Grid>
				{PROPERTIES.map((property) => {
					return (
						<Grid.Col key={property.id} span={6}>
							<Card>
								<Stack align={"center"}>
									<Image src={property.image} alt={property.imageAlt} width={75} height={75} />
									<Title preset="h3">{property.title}</Title>
									<Button
										design="transparent"
										as="a"
										href={property.primaryLink}
										target="_blank"
										rel="noopener noreferrer"
										text={property.primaryText}
									/>
									<Button
										design="transparent"
										as="a"
										href={property.secondaryLink}
										target="_blank"
										rel="noopener noreferrer"
										text={property.secondaryText}
									/>
								</Stack>
							</Card>
						</Grid.Col>
					)
				})}
			</Grid>
		</Box>
	)
}

export default ContactUs
