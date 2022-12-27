import colors from "@Colors"
import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-bottom: 12px;
`

export const Item = styled.button<{ active: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	appearance: none;
	border: none;
	background: none;
	padding: 8px 10px;
	border-radius: 20px;
	background-color: ${(props) => (props.active ? colors.light : "transparent")};
	color: ${(props) => (props.active ? colors.lighter : colors.lightest)};
	font-family: "Montserrat", sans-serif;
	font-size: 14px;
	letter-spacing: 2px;
	cursor: pointer;
	transition: 0.1s;
`
