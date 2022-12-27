import PageWrapper from "@Components/layouts/PageWrapper"
import ContactTiles from "@Components/shared/ContactUs"
import { createStyles, Title } from "@mantine/core"

const ContactUs = () => {
	const { classes } = useStyles()

	return (
		<PageWrapper title="Contact Us | kittr" description="Get in touch with the awesome people at kittr.">
			<Title order={1} className={classes.title}>
				CONTACT US
			</Title>
			<ContactTiles />
		</PageWrapper>
	)
}

export default ContactUs

const useStyles = createStyles((theme) => ({
	title: {
		marginBottom: "24px",
		padding: "0 5%",
		fontSize: "36px",
		fontWeight: 900,
		letterSpacing: "3px",
		fontFamily: '"Barlow Condensed", serif',
		color: theme.white
	}
}))
