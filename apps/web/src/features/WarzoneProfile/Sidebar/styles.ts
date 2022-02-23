import styled from "styled-components"
import colors from "@Colors"
import { caption } from "@Styles/typography"

export const Wrapper = styled.aside<{ isSidebarOpen: boolean; viewportWidth: number }>`
	position: relative;
	width: 20%;
	min-width: 328px;
	height: 100%;
	background-color: ${colors.middle};
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	@media (max-width: 1050px) {
		position: absolute;
		left: 0;
		display: block;
		z-index: 10;
		width: ${(props) => (props.isSidebarOpen ? "100%" : 0)};
		min-width: 0;
		opacity: ${(props) => (props.isSidebarOpen ? 1 : 0)};
		transition: 0.2s;
		overflow: hidden;
	}

	*[data-ref="vm-preloader"] {
		min-width: 300px !important;
	}
`

export const Container = styled.div`
	height: 100%;
	padding: 10px;

	overflow-x: visible;
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

export const SearchWrapper = styled.div`
	padding: 12px;
	background-color: ${colors.middle};
	box-shadow: 0 16px 8px -8px ${colors.middle};
`

export const CategoryLabel = styled.p`
	margin-top: 12px;
	margin-left: 18px;
	font-size: 14px;
	letter-spacing: 2px;
`

export const Caption = styled.p`
	margin: 24px 0 12px;
	${caption}
	color: ${colors.white};
`
