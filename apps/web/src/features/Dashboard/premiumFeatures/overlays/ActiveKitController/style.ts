import styled from "styled-components"
import colors from "@Colors"
import { paragraph } from "@Styles/typography"

export const Paragraph = styled.p`
	${paragraph};
	color: ${colors.lighter};
	list-style: disc;
`
