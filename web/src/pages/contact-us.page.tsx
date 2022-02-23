import PageWrapper, { H1 } from "@Components/layouts/PageWrapper"
import ContactTiles from "@Components/shared/ContactUs"

const ContactUs = ({ ...props }) => {
	return (
		<PageWrapper title="Contact Us | kittr" description="Get in touch with the awesome people at kittr.">
			<H1>CONTACT US</H1>
			<ContactTiles />
		</PageWrapper>
	)
}

export default ContactUs
