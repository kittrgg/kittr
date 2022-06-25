import colors from "@Colors"
import { Section, Text, Title } from "@kittr/ui"
import { Box, Grid, Image } from "@mantine/core"
import { header1, header2 } from "@Styles/typography"
import styled from "styled-components"
import CallToAction from "./CallToAction"
import * as Styled from "./style"

const STEPS = [
	{
		id: 1,
		title: "STEP 1: CREATE YOUR KITS",
		titleHelper: " (5-13 minutes)",
		image: "/media/kit-editor-example.png",
		imageWidth: 1679,
		imageHeight: 977,
		border: true
	},
	{
		id: 2,
		title: "STEP 2: UPDATE YOUR COMMANDS",
		titleHelper: " (2-4 minutes)",
		image: "/media/export-commands-example.jpg",
		imageWidth: 1440,
		imageHeight: 1022,
		border: true
	},
	{
		id: 3,
		title: "STEP 3: TURN THE CHANNEL ON",
		titleHelper: " (!loadouts)",
		image: "/media/kit-stack.png",
		imageWidth: 1440,
		imageHeight: 1022,
		border: false
	}
]

const HowItWorks = ({}) => {
	return (
		<Box style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
			<Title preset="h1" mb={20}>
				HOW IT WORKS
			</Title>
			<Grid gutter="xl">
				{STEPS.map((step) => {
					return (
						<Grid.Col>
							<Section key={step.id} title={step.title + step.titleHelper}>
								<Image
									src={step.image}
									width={"100%"}
									height={"100%"}
									radius="md"
									p={10}
									sx={() => ({
										backgroundColor: colors.darker,
										borderRadius: "12px"
									})}
								/>
							</Section>
						</Grid.Col>
					)
				})}
			</Grid>

			<CallToAction marginTop="60px" marginBottom="48px" header="start sharing today." />
		</Box>
	)
}

export default HowItWorks
