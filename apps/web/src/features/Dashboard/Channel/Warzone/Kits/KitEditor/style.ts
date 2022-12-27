import colors from "@Colors"
import { header2, paragraph } from "@Styles/typography"
import styled from "styled-components"

export const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	overflow: hidden;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
`

export const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`

export const Scroller = styled.div`
	flex: 1;
	width: 100%;
	padding-right: 10px;

	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

export const Container = styled.div`
	position: relative;
	margin: 10px 0;
	padding: 30px;
	border-radius: 25px;
	background-color: ${colors.darker};

	&:first-of-type {
		margin-top: 0;
	}
`

export const Header = styled.h3`
	${header2};
`

export const HeaderHelper = styled.p<{ animate?: boolean; animationDuration?: number }>`
	font-weight: 500;
	font-size: 18px;
	font-style: italic;
	transition: 0.2s;
	color: ${(props) => (props.animate ? colors.red : colors.lighter)};
	transform: ${(props) => (props.animate ? "scale(1.1) rotate(10deg)" : "scale(1.0) rotate(0deg)")};
`

export const ParagraphHelper = styled.p`
	margin-top: 24px;
	color: ${colors.lighter};
	font-size: 18px;
	letter-spacing: 1px;
`

export const Select = styled.select`
	appearance: none;
	background: transparent;
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-image: url("/media/select-arrow.svg");
	padding: 12px;
	padding-right: 36px;
	border: none;
	outline: none;
	color: ${colors.lighter};
	${paragraph};
	cursor: pointer;
	transition: 0.2s;

	option {
		background-color: ${colors.dark};
		color: ${colors.white};
	}

	&:hover {
		background-color: ${colors.white};
		border-radius: 12px;
	}

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

export const ClosingParenthesis = styled.span`
	font-size: 18px;
	font-weight: 600;
`

export const AttachmentsFlex = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-top: 32px;
`
