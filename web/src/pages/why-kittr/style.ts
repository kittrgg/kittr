import styled from "styled-components"
import colors from "@Colors"
import { header1, header2, paragraph } from "@Styles/typography"

export const ImageContainer = styled.div`
	width: 50vw;
	min-width: 320px;
	margin: 0 auto 36px;
	overflow: hidden;
	box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.05);
	border-radius: 12px;
`

export const LinkButton = styled.a<{ design?: string }>`
	display: inline-block;
	margin-top: 32px;
	padding: 20px 32px;
	color: ${(props) => (props.design === "transparent" ? colors.white : colors.dark)};
	border-radius: 20px;
	border: ${(props) => (props.design == "transparent" ? `2px solid ${colors.white}` : "")};
	background-color: ${(props) => (props.design === "transparent" ? "transparent" : colors.white)};
	text-decoration: none;
	${paragraph};
	font-weight: 600;
	cursor: pointer;
	transition: 0.2s;

	@media (hover: hover) {
		&:hover {
			background-color: ${colors.dark};
			color: ${colors.white};
		}
	}
`

export const P = styled.p`
	margin-top: 28px;
	margin-bottom: 48px;
	color: ${colors.lighter};
	${header2};
	text-align: center;
`

export const H2 = styled.h2`
	color: ${colors.white};
	${header1};
	text-align: center;

	@media (max-width: 450px) {
		font-size: 48px;
	}
`
