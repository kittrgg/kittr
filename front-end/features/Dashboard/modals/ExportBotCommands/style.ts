import colors from "@Colors"
import { caption, header2, paragraph } from "@Styles/typography"
import styled from "styled-components"

export const HorizFlex = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`

export const ToggleDescription = styled.p`
	margin-right: 80px;
	${paragraph};
`

export const SubText = styled.p`
	margin-top: 4px;
	color: ${colors.lightest};
	${caption};
	line-height: 150%;
`

export const ToggleContainer = styled.div<{ flexBasis: number }>`
	position: relative;
	flex-basis: ${(props) => `${props.flexBasis}px`};
	margin-bottom: 50px;
`

export const ListingHeader = styled.div`
	margin-bottom: 20px;
	${header2};
`

export const CommandTitle = styled.div`
	position: relative;
	letter-spacing: 3px;
`

export const CommandContent = styled.div`
	width: 100%;
	white-space: nowrap;
	color: ${colors.lighter};
	letter-spacing: 3px;
	overflow: hidden;
	cursor: pointer;
	mask-image: linear-gradient(
		to left,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0) 8%,
		rgba(0, 0, 0, 1) 20%,
		rgba(0, 0, 0, 1) 100%
	);
`

export const ImageContainer = styled.div`
	position: absolute;
	right: 36px;
	cursor: pointer;
`

export const CopiedToClipboard = styled.div<{ visible: boolean }>`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 16px 75px;
	border-radius: 20px;
	background-color: ${colors.light};
	transition: 0.2s;
	bottom: ${(props) => (props.visible ? "30px" : "0")};
	opacity: ${(props) => (props.visible ? "1" : 0)};

	p {
		letter-spacing: 2px;
	}
`
