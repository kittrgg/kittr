import { Box, BoxProps, Image } from "@mantine/core"
import colors from "../../styles/colors"
import { Title } from "../Title"

const CARD_PRESETS = {
	lg: {
		width: "100%",
		height: "100%",
		backgroundColor: colors.darker,
		padding: "24px",
		borderRadius: "12px",
		minHeigh: "300px"
	}
}

interface Props extends BoxProps<any> {
	/** Use a preset defined styling property. */
	preset?: keyof typeof CARD_PRESETS
	title: string
	icon?: string
	iconAlt?: string
}

export const Card = ({
	preset,
	title,
	icon,
	iconAlt,
	children,
	sx,
	...props
}: Props) => {
	const styles = preset ? CARD_PRESETS[preset] : CARD_PRESETS["lg"]
	// const { colors } = useMantineTheme()

	return (
		<Box sx={{ ...styles, ...sx }} {...props}>
			<Box
				sx={() => ({
					textAlign: "center"
				})}
			>
				{icon && (
					<Image
						src={icon}
						width="100%"
						height="100px"
						fit="contain"
						alt={iconAlt}
					/>
				)}
				<Title preset="h3" mt="md">
					{title}
				</Title>
			</Box>

			{children}
		</Box>
	)
}
