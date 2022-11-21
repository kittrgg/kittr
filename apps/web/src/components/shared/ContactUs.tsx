import colors from "@Colors"
import { Routes } from "@Utils/lookups/routes"
import { createStyles, Grid, Title, UnstyledButton } from "@mantine/core"

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
export const ContactUs = () => {
	const { classes } = useStyles()

	return (
		<Grid columns={12} className={classes.grid}>
			{PROPERTIES.map((property) => (
				<Grid.Col key={property.title} className={classes.gridColumn}>
					<img src={property.image} alt={property.imageAlt} width={75} height={75} />
					<Title order={2} className={classes.title}>
						{property.title}
					</Title>
					<UnstyledButton
						component="a"
						href={property.primaryLink}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.linkButton}
					>
						{property.primaryText}
					</UnstyledButton>
					<UnstyledButton
						component="a"
						href={property.secondaryLink}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.secondaryLinkButton}
					>
						{property.secondaryText}
					</UnstyledButton>
				</Grid.Col>
			))}
		</Grid>
	)
}

export default ContactUs

const useStyles = createStyles((theme) => {
	const fontStyles = {
		fontSize: "18px",
		fontWeight: 600,
		letterSpacing: "2px",
		fontFamily: '"Montserrat", sans-serif'
	}

	return {
		grid: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gridGap: "40px",
			width: "80%",
			minWidth: "260px",
			margin: "0 auto",
			color: theme.white,

			["@media (max-width: 750px)"]: {
				gridTemplateColumns: "1fr"
			}
		},

		gridColumn: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start",
			padding: "50px 10%",
			background: colors.dark20,
			borderRadius: theme.radius.md
		},

		title: {
			margin: "56px 0"
		},

		linkButton: {
			padding: "20px 50px",
			border: `2px solid ${theme.white}`,
			borderRadius: "20px",
			textDecoration: "none",
			textAlign: "center",
			transition: "0.2s",
			color: theme.white,
			...fontStyles,

			["&:hover"]: {
				backgroundColor: theme.white,
				color: colors.middle
			}
		},

		secondaryLinkButton: {
			marginTop: "60px",
			color: colors.lighter,
			textDecoration: "none",
			textAlign: "center",
			transition: "0.2s",
			...fontStyles,

			["&:hover"]: {
				color: theme.white
			}
		}
	}
})
