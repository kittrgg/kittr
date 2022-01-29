// <PageWrapper /> and <AdPageWrapper /> should end up getting molded into one component probably.
// It should probably be that <AdPageWrapper /> has a "noAds" option on it.
import { ReactNode } from "react"
import styled from "styled-components"

import { header1 } from "@Styles/typography"
import Header from "./NavMenu"
import Footer from "./Footer"
import Head from "@Components/shared/Head"

interface Props {
	/** Head title for meta information */
	title: string
	/** Head description for meta information */
	description: string
	/** React children to render for content of page. */
	children: ReactNode
}

export const H1 = styled.h1`
	margin-bottom: 24px;
	padding: 0 5%;
	${header1};
`

/** Standardized page wrapper for general use. Does not contain ad units. */
const PageWrapper = ({ title, description, children }: Props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				position: "relative",
				minHeight: "100vh",
				marginTop: "100px"
			}}
		>
			<Head title={title} description={description} />
			<Header />
			<div
				style={{
					width: "100%",
					maxWidth: "2500px",
					margin: "0 auto 24px"
				}}
			>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default PageWrapper
