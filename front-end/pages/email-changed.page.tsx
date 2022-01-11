import colors from "@Colors"
import Head from "@Components/shared/Head"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { header1, header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

const EmailChanged = ({ ...props }) => {
	const navbarHeight = 115
	const { height = 0 } = useViewportDimensions()

	return (
		<Body height={height - navbarHeight} style={{ alignItems: "center", justifyContent: "center" }}>
			<Head
				title={`Email Change Started | kittr`}
				description={`You've started the process to change your email address. | kittr`}
			/>
			<ErrorBody>
				<ErrorHeader>YOUR EMAIL HAS NOT CHANGED QUITE YET</ErrorHeader>
				<ErrorParagraph>Visit your new email address and click the link to confirm the change.</ErrorParagraph>
				<ErrorParagraph>If you change your mind about this new email address...</ErrorParagraph>
				<ErrorParagraph>Your previous email address still works.</ErrorParagraph>
				<Link href={Routes.DASHBOARD} passHref>
					<ErrorLink>BACK TO LOGIN</ErrorLink>
				</Link>
			</ErrorBody>
		</Body>
	)
}

export default EmailChanged

// Styled Components

const Body = styled.div<{ height: number }>`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: ${(props) => props.height + "px"};
`

const ErrorBody = styled.div`
	width: 50%;
	min-width: 300px;
	max-width: 1000px;
	text-align: center;
`

const ErrorHeader = styled.h1`
	margin-bottom: 60px;
	${header1};
	font-size: 28px;
	text-align: left;
`
const ErrorParagraph = styled.p`
	font-size: 18px;
	letter-spacing: 2px;
	text-align: left;

	&:first-of-type {
		margin-bottom: 32px;
	}
`

const ErrorLink = styled.a`
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
