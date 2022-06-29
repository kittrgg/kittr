import Link from "next/link"
import styled from "styled-components"

import colors from "@Colors"
import Head from "@Components/shared/Head"
import { header1, header2, paragraph } from "@Styles/typography"

interface Props {
	/** The type of item that couldn't be found. On kittr, these are the two main distinctions that people would be searching through. */
	type: "game" | "channel"
}

/** If a game or channel can't be found, render this component. It is a full-screen so there is no need for any layout with it. */
export const NoItemFound = ({ type }: Props) => {
	return (
		<>
			<Head
				title={`No ${type.charAt(0).toUpperCase() + type.slice(1)} Found | kittr`}
				description={`Hmm, no ${type} found.`}
			/>
			<Wrapper style={{ alignItems: "center", justifyContent: "center" }}>
				<Body>
					<Header>OOPS...</Header>
					<Paragraph>Sorry, but we aren't seeing this {type} on kittr.</Paragraph>
					<Paragraph>Let's get you back to the {type}s page so you can find what you're looking for.</Paragraph>
					<Link href={`/${type}s`} passHref>
						<StyledLink>BACK TO {type.toUpperCase()}S PAGE</StyledLink>
					</Link>
				</Body>
			</Wrapper>
		</>
	)
}

export default NoItemFound

// Styled Components

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
`

const Body = styled.div`
	width: 50%;
	min-width: 300px;
	max-width: 1000px;
	text-align: center;
`

const Header = styled.h1`
	margin-bottom: 60px;
	${header1};
	font-size: 28px;
	text-align: left;
`
const Paragraph = styled.p`
	${paragraph};
	text-align: left;

	&:first-of-type {
		margin-bottom: 32px;
	}
`

const StyledLink = styled.a`
	display: inline-block;
	margin: 0 auto;
	margin-top: 32px;
	padding: 20px 72px;
	border-radius: 24px;
	background-color: ${colors.white};
	color: ${colors.dark};
	${header2};
	font-size: 16px;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.dark};
		color: ${colors.white};
	}
`
