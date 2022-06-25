import * as Styled from "./style"
import styled from "styled-components"
import colors from "@Colors"
import { Card, Text, Title } from "@kittr/ui"
import { Box, Center, Grid, ScrollArea, Stack } from "@mantine/core"

const TESTIMONIALS = [
	{
		name: "JoeWo",
		role: "Player",
		quote: "WAIT THATS GAS"
	},
	{
		name: "TeePee",
		role: "Player",
		quote: "Yo, Blade, that site looks sick, though."
	},
	{
		name: "Wampus",
		role: "Mod",
		quote: "It's really easy to setup, love the UI you guys have implemented"
	},
	{
		name: "exzachtt",
		role: "Player",
		quote: "FIRE FIRE FIRE FIRE! THAT SITE IS FIRE!!!"
	},
	{
		name: "teejaySB",
		role: "Mod",
		quote: "can someone check the loadout link and tell me how sick that is"
	},
	{
		name: "Almxnd",
		role: "Player",
		quote: "Wait, hol' up. Tommey, are you on this? You gotta get on this."
	},
	{
		name: "GeeBigs",
		role: "Player",
		quote: "This site has been absolutely perfect for my community and I've received a handful of compliments on it."
	},
	{
		name: "CuddelzTV",
		role: "Viewer",
		quote: "damn thats a really dope loadout tracker"
	},
	{
		name: "DanH17_",
		role: "Mod",
		quote: "Holy **** that is amazing...yeah that is so good"
	}
]

const Testimonials = ({ ...props }) => {
	return (
		<Box mb={60}>
			<Stack pb={10} align="center">
				<Title preset="h1">TESTIMONIALS</Title>

				<Title preset="h2" style={{ color: colors.lighter }} mb={20}>
					STILL DON'T BELIEVE US? HERE'S WHAT THE COMMUNITY SAYS.
				</Title>
			</Stack>

			<Box
				sx={() => ({
					"overflowY": "hidden",
					"overflowX": "scroll",
					"-webkit-overflow-scrolling": "touch",

					"&::-webkit-scrollbar": {
						width: "8px"
					},
					"&::-webkit-scrollbar-track": {
						background: "transparent"
					},

					"&::-webkit-scrollbar-thumb": {
						backgroundColor: colors.lightest,
						border: "5px solid transparent"
					}
				})}
			>
				<Grid gutter={10} style={{ width: "2700px" }} p={10}>
					{TESTIMONIALS.map(({ name, role, quote }) => {
						return (
							<Box pb={20} style={{ maxHeight: "250px" }}>
								<Card preset="sm" m={10} bgColor={colors.dark}>
									<Title preset="h4">{name}</Title>

									<Text preset="sm italic" color={colors.lighter}>
										{role}
									</Text>

									<Text preset="md">{quote}</Text>
								</Card>
							</Box>
						)
					})}
				</Grid>
			</Box>
		</Box>
	)
}

export default Testimonials
