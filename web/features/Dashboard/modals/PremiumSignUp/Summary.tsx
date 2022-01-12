import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { header2, paragraph } from "@Styles/typography"
import { TextInputBox } from "@Components/shared"

interface Props {
	tip: number
	setTip: Dispatch<SetStateAction<number>>
}

const Summary = ({ tip, setTip }: Props) => {
	const today = new Date().toDateString()

	return (
		<>
			<Title>BILLING SUMMARY</Title>
			<Paragraph style={{ margin: "60px 0 32px" }}>Subscription Start Date</Paragraph>
			<Paragraph style={{ color: colors.white }}>{today}</Paragraph>
			<Paragraph style={{ margin: "64px 0" }}>
				Your subscription will automatically renew every 30 days. You can cancel at any time here in the Dashboard.
			</Paragraph>
			<TipContainer>
				<HorizFlex>
					<TipParagraph>Add a Tip</TipParagraph>
					<TipWrapper>
						$
						<TextInputBox
							name="tipInput"
							onChange={(e) => setTip(e.target.value)}
							type="number"
							value={tip}
							inputStyles={{
								width: "150px",
								backgroundColor: colors.white,
								color: colors.middle,
								textAlign: "right",
								position: "absolute"
							}}
						/>
					</TipWrapper>
				</HorizFlex>
				<TipParagraph style={{ marginTop: "36px" }}>
					Enjoying kittr? Support kittr’s creator by adding a tip to your monthly subscription.
				</TipParagraph>
			</TipContainer>
			<HorizFlex>
				<Paragraph>Total</Paragraph>
				<Paragraph style={{ color: colors.white, fontWeight: 600 }}>$5/MO</Paragraph>
			</HorizFlex>
		</>
	)
}

export default Summary

// Styled Components

const Title = styled.h3`
	${header2};
`

const Paragraph = styled.p`
	${paragraph};
	color: ${colors.lightest};
`

const TipWrapper = styled.span`
	position: relative;
`

const TipContainer = styled.div`
	padding: 22px 48px 32px;
	background: ${colors.premiumGradient};
	border-radius: 8px;
`

const TipParagraph = styled.p`
	${paragraph};
`

const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
