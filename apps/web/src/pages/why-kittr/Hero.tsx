import colors from "@Colors"
import { Title } from "@kittr/ui"
import { Box, Image, Stack } from "@mantine/core"

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
	)
}

export default Hero
