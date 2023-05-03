import colors from "@Colors"
import styled from "styled-components"

interface Props {
	label: string
	number: number
}

function StatBar({ label, number }: Props) {
	return (
		<Container>
			<FirstLine>
				<Label>{label}</Label>
				<Number>{number}</Number>
			</FirstLine>
			<BarBackground />
			<BarFill number={number} />
		</Container>
	)
}

export default StatBar

// Styled Components

const Container = styled.div`
	width: 100%;
	padding: 5%;
	flex-basis: 50%;

	@media (max-width: 600px) {
		flex-basis: 100%;
	}
`

const FirstLine = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Label = styled.p`
	color: ${colors.white};
	font-size: 16px;
`

const Number = styled.p`
	color: ${colors.white};
	font-size: 16px;
`

const BarBackground = styled.div`
	position: relative;
	top: 6px;
	width: 100%;
	height: 6px;
	background-color: ${colors.black};
	border-radius: 25px;
`

const BarFill = styled.div<{ number: number }>`
	position: relative;
	z-index: 1;
	width: ${(props) => `${props.number}%`};
	height: 6px;
	background-color: ${colors.lightest};
	border-radius: 25px;
`
