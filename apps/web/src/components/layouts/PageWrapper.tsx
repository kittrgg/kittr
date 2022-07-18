// <PageWrapper /> and <AdPageWrapper /> should end up getting molded into one component probably.
// It should probably be that <AdPageWrapper /> has a "noAds" option on it.
import { ReactNode } from "react"

import Head from "@Components/shared/Head"
import { Title } from "@kittr/ui"
import { AppShell, Container } from "@mantine/core"
import Footer from "./Footer"
import Header from "./NavMenu"

interface Props {
	/** Head title for meta information */
	title: string
	/** Head description for meta information */
	description: string
	/** React children to render for content of page. */
	children: ReactNode
	/** Title used in the H1 tag for the page */
	pageTitle?: string
}

/** Standardized page wrapper for general use. Does not contain ad units. */
const PageWrapper = ({ title, description, children, pageTitle }: Props) => (
		<>
			<Head title={title} description={description} />
			<AppShell padding={0} header={<Header />}>
				<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
					<Container
						fluid
						sx={{
							paddingTop: "100px",
							flex: 1,
							margin: "2rem",
							maxWidth: "2500px"
						}}
					>
						<Title order={1} preset="h1" sx={{ marginBottom: "1rem" }}>
							{pageTitle}
						</Title>
						{children}
					</Container>
					<Footer />
				</div>
			</AppShell>
		</>
	)

export default PageWrapper
