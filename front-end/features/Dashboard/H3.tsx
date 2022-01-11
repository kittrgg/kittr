import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"

interface Props {
	children: string | ReactNode
	style?: CSSProperties
}

const H3Comp = ({ children, style }: Props) => {
	return <H3 style={style}>{children}</H3>
}

export default H3Comp

const H3 = styled.h3`
	margin-top: 64px;
	color: ${colors.white};
	${paragraph};
`
