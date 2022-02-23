import ContactUs from "@Components/shared/ContactUs"
import Head from "@Components/shared/Head"
import { totalKitsQuery } from "@Services/mongodb"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { GetStaticProps } from "next"
import Link from "next/link"
import CallToAction from "./CallToAction"
import Features from "./Features"
import Hero from "./Hero"
import HowItWorks from "./HowItWorks"
import * as Styled from "./style"
import Testimonials from "./Testimonials"
import Winners from "./Winners"

interface Props {
	totalNumberOfKits: number
}

const WhyKittr = ({ totalNumberOfKits }: Props) => {
	return (
		<>
			<Head title="Improve Your Channel in 15 Minutes | kittr" description="." />
			<Hero totalNumberOfKits={totalNumberOfKits} />
			<div style={{ margin: "0 24px" }}>
				<Features />
				<HowItWorks />
				<Winners />
				<Testimonials />
				<Styled.H2>CONTACT US</Styled.H2>
				<Styled.P>STILL HAVE QUESTIONS? WE'VE GOT YOUR BACK.</Styled.P>
				<ContactUs />
				<CallToAction marginTop="32px" header="get kittd." />
				<div style={{ marginBottom: "32px", textAlign: "center" }}>
					<Link href={Routes.ROOT} passHref>
						<Styled.LinkButton
							design="transparent"
							target="_blank"
							rel="noopener no referrer"
							style={{ marginTop: "0" }}
						>
							VISIT SITE
						</Styled.LinkButton>
					</Link>
				</div>
			</div>
		</>
	)
}

export default WhyKittr

export const getStaticProps: GetStaticProps = async () => {
	await connectToDatabase()
	const totalNumberOfKits = await totalKitsQuery()

	return {
		props: {
			totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0
		},
		revalidate: 60
	}
}
