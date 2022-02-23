import styled from "styled-components"

import colors from "@Colors"
import { header2, paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { Button } from "@Components/shared"

const BuyABoostr = ({ ...props }) => {
	const dispatch = useDispatch()

	return (
		<Container>
			<Title>
				BOOSTRS
				<NewTag>NEW</NewTag>
			</Title>
			<Paragraph>
				Take your channel to the next level by renting space to promote yourself on kittr (for our 10k users daily!).{" "}
			</Paragraph>
			<Paragraph>When you’re live and boostd, your channel will be featured on our home page. </Paragraph>
			<Button
				design="white"
				text="BUY A BOOSTR"
				onClick={() => dispatch(setModal({ type: "Buy Home Channel Boostr", data: {} }))}
			/>
		</Container>
	)
}

export default BuyABoostr

// Styled Components

const Container = styled.div``

const Title = styled.p`
	margin-top: 64px;
	color: ${colors.white};
	${header2};
`

const Paragraph = styled.p`
	margin-top: 18px;
	${paragraph};
	color: ${colors.lighter};
`

const NewTag = styled.sup`
	position: relative;
	top: -14px;
	left: 4px;
	padding: 4px 8px;
	border-radius: 12px;
	background-color: ${colors.white};
	color: ${colors.light};
	font-size: 12px;
	font-weight: initial;
`
