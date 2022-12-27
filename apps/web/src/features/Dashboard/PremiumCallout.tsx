import colors from "@Colors"
import { SVG } from "@Components/shared"
import { setModal } from "@Redux/slices/dashboard"
import { useManagerRole } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

interface Props {
	text: string
}

const PremiumCallout = ({ text }: Props) => {
	const dispatch = useDispatch()
	const role = useManagerRole()

	return (
		<LearnMore data-cy="premium-learn-more" onClick={() => dispatch(setModal({ type: "Premium Plans", data: {} }))}>
			<span>
				<SVG.Premium width="24px" style={{ position: "relative", top: "3px" }} />
				<Text>{text}</Text>
			</span>
			{role !== "EDITOR" && <span>LEARN MORE</span>}
		</LearnMore>
	)
}

export default PremiumCallout

// Styled Components

const LearnMore = styled.button`
	appearance: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 24px;
	border: 0;
	border-radius: 12px;
	background: ${colors.premiumGradient};
	${paragraph};
	color: ${colors.white};
	font-weight: 600;
	cursor: pointer;
`

const Text = styled.span`
	${paragraph};
	margin: 0 32px;
	font-weight: 400;
	font-size: 18px;
`
