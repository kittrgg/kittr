import styled from "styled-components"

export const VertSplit = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	height: 50vh;
	border: 2px solid gray;
`

export const HorzSplit = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => 100 / props.siblings}%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
`

export const Heading = styled.h1`
	font-size: 24px;
	font-weight: 700;
	letter-spacing: 4px;
`

export const Button = styled.button`
	margin: 5px 0;
	padding: 5px 0;
	background-color: white;
	border: none;
	font-family: "Montserrat";
	font-size: 18px;
`
