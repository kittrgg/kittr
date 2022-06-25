import PageWrapper from "@Components/layouts/PageWrapper"
import ContactUs from "@Components/shared/ContactUs"
import Head from "@Components/shared/Head"
import { Title } from "@kittr/ui"
import { BackgroundImage, Box, Center, Stack } from "@mantine/core"
import { getTotalKitsQuery } from "@Services/orm/queries/kits/total"
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
import colors from "@Colors"
import { Button } from "@Components/shared"

interface Props {
	totalNumberOfKits: number
}

const WhyKittr = ({ totalNumberOfKits }: Props) => {
	return (
		<Box
			sx={() => ({
				backgroundImage: "url(/media/hero.png)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "top"
			})}
		>
			<Hero totalNumberOfKits={totalNumberOfKits} />
			<div style={{ margin: "0 24px" }}>
				<Features />
				<HowItWorks />
				<Winners />
				<Testimonials />
				<ContactUs />
				<CallToAction marginTop="32px" marginBottom="32px" header="get kittd." />
				<Center>
					<Button
						design="transparent"
						as="a"
						href={Routes.ROOT}
						target="_blank"
						rel="noopener noreferrer"
						text={"VISIT SITE"}
						style={{ width: "200px" }}
					/>
				</Center>
			</div>
		</Box>
	)
}

export default WhyKittr

export const getStaticProps: GetStaticProps = async () => {
	await connectToDatabase()
	const totalNumberOfKits = await getTotalKitsQuery()

	return {
		props: {
			totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0
		},
		revalidate: 60
	}
}
