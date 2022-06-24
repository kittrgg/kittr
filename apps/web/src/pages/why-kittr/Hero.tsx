import colors from "@Colors"
import styled from "styled-components"
import { header1, header2 } from "@Styles/typography"
import { Text, Title } from "@kittr/ui"
import { BackgroundImage, Box, Center, Image, Stack } from "@mantine/core"

interface Props {
	totalNumberOfKits: number
}

/** The beautiful hero for the mod landing page. */
const Hero = ({ totalNumberOfKits }: Props) => {
	return (
		<Stack align={"center"} my={10}>
			<Image src="/media/logo.svg" alt="Kittr Logo" width={"100%"} height={"100%"} />
			<Title preset="d1" my="lg">
				get kittd.
			</Title>
			<Title preset="h2" style={{ color: colors.lightest }}>
				{totalNumberOfKits}+ kits
			</Title>
			<Title preset="h3">In 15 minutes, your !loadout command can look like this.</Title>
			<Box
				sx={() => ({
					width: "50%"
				})}
			>
				<Image
					src="/media/landing-page-screenie.png"
					alt="Screenshot of Kittr dashboard"
					width={"100%"}
					height={"100%"}
					radius="md"
					p={10}
					sx={() => ({
						backgroundColor: colors.darker,
						borderRadius: "12px"
					})}
				/>
			</Box>
			<Title preset="h2" style={{ color: colors.lighter }}>
				Quite a bit better than a Google Sheet, huh?
			</Title>
		</Stack>
		// <Box // 	sx={() => ({
		// 		position: "relative",
		// 		zIndex: -1,
		// 		top: "-150px",
		// 		marginBottom: "-50vh",
		// 		height: "100vh"
		// 	})}
		// >
		// 	<Box
		// 		sx={() => ({
		// 			position: "absolute",
		// 			inset: 0,
		// 			width: "100%",
		// 			height: "100vh",
		// 			overflow: "hidden",
		// 			filter: "blur(4px)"
		// 		})}
		// 	>
		// 		<Image src="/media/hero.jpg" width={"100%"} height={"100%"} fit="cover" />
		// 	</Box>
		// 	<Box
		// 		sx={() => ({
		// 			position: "absolute",
		// 			top: "22%",
		// 			left: "50%",
		// 			transform: "translateX(-50%)",
		// 			width: "100%",
		// 			zIndex: 1,
		// 			display: "flex",
		// 			flexDirection: "column",
		// 			alignItems: "center",
		// 			justifyContent: "center"
		// 		})}
		// 	>
		// 		<Image src="/media/logo.svg" alt="Kittr Logo" width={"100%"} height={"100%"} />
		// 		<Title preset="d1" m="lg">
		// 			get kittd.
		// 		</Title>
		// 		<Title preset="h2" style={{ color: colors.lightest }}>
		// 			{totalNumberOfKits}+ kits
		// 		</Title>
		// 		<Title preset="h3" mt={10}>
		// 			In 15 minutes, your !loadout command can look like this.
		// 		</Title>
		// 	</Box>
		// </Box>
	)
}

export default Hero

// Styled Components

const Copy = styled.div``

const Headline = styled.h2`
	${header1};
	font-size: 72px;
`

const Subline = styled.h3`
	margin-top: 18px;
	padding: 0 10%;
	font-weight: 600;
	font-size: 22px;
	letter-spacing: 2px;
	text-align: center;
`

const KitsTotal = styled.p`
	color: ${colors.lightest};
	${header2};
`
