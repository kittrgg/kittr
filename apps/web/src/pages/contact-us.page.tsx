import PageWrapper from "@Components/layouts/PageWrapper"
import ContactTiles from "@Components/shared/ContactUs"
import { createStyles, Title } from "@mantine/core"

function ContactUs() {
	const { classes } = useStyles()

	return (
		<PageWrapper description="Get in touch with the awesome people at kittr." title="Contact Us | kittr">
			<Title className={classes.title} order={1}>
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
