import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

export const Body = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow: hidden;
`

export const Paragraph = styled.p`
	font-size: 22px;

	&:first-of-type {
		margin-bottom: 36px;
	}
`

export const ErrorBody = styled.div`
	width: 50%;
	min-width: 300px;
	max-width: 1000px;
	text-align: center;
`

export const ErrorHeader = styled.h1`
	margin-bottom: 60px;
	font-family: "Barlow Condensed", serif;
	font-size: 28px;
	font-weight: 900;
	letter-spacing: 3px;
	text-align: left;
`
export const ErrorParagraph = styled.p`
	${paragraph};
	text-align: left;

	&:first-of-type {
		margin-bottom: 32px;
	}
`

export const ErrorLink = styled.a`
	display: inline-block;
	margin: 0 auto;
	margin-top: 32px;
	padding: 20px 72px;
	border-radius: 24px;
	background-color: ${colors.white};
	color: ${colors.dark};
	font-family: "Montserrat", sans-serif;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 2px;
	text-align: center;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.dark};
		color: ${colors.white};
	}
`

export const HeaderLink = styled.div`
	color: ${colors.white};
	font-weight: 600;
	letter-spacing: 2px;
	text-decoration: none;
`

export const CreatorCode = styled.p`
	margin-top: 4px;
	color: ${colors.lighter};
`
