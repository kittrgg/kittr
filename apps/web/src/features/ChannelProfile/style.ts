import colors from "@Colors"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

export const H2 = styled.h2`
	margin: 0 0 24px 5%;
	${header2};
`

export const SpecsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	width: 80%;
	max-width: 1000px;
	margin: 0 auto;

	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
`

export const GridItem = styled.div<{ colorHover: string }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 250px;
	max-width: 500px;
	padding: 24px 32px;
	background-color: ${colors.dark20};
	border-radius: 10px;
	overflow: hidden;
	transition: 0.2s;

	@media (hover: hover) {
		&:hover {
			background-color: ${(props) => props.colorHover};
		}
	}
`
