import { Box, BoxProps, Image } from "@mantine/core"
import colors from "../../styles/colors"
import { Title } from "../Title"

const CARD_PRESETS = {
	sm: {
		width: "100%",
		height: "100%",
		padding: "24px",
		borderRadius: "12px"
	},
	lg: {
		width: "100%",
		height: "100%",
		padding: "24px",
		borderRadius: "12px"
	}
}

interface Props extends BoxProps<any> {
	/** Use a preset defined styling property. */
	preset?: keyof typeof CARD_PRESETS
	title: string
	icon?: string
	iconAlt?: string
	bgColor?: string
}

export const Card = ({
	preset,
	title,
	icon,
	iconAlt,
	bgColor,
	children,
	sx,
	...props
}: Props) => {
	const styles = preset ? CARD_PRESETS[preset] : CARD_PRESETS["lg"]
	const cardBgColor = bgColor ? bgColor : colors.darker
	// const { colors } = useMantineTheme()

	return (
		<Box sx={{ ...styles, ...sx, backgroundColor: cardBgColor }} {...props}>
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
