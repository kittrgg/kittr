import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { SVG } from "@Components/shared"

const FavoriteBlueprint = ({ ...props }) => {
	const activeWeapon = useActiveWeapon()
	const quote = activeWeapon.userData.quote

	if (quote) {
		return (
			<Container>
				<SVG.QuotationMark
					width="50px"
					fill={colors.darker}
					style={{ position: "absolute", zIndex: "-1", top: "12px", left: "36px" }}
				/>
				<SVG.QuotationMark
					width="50px"
					fill={colors.darker}
					style={{ position: "absolute", zIndex: "-1", bottom: "12px", right: "36px", transform: "rotate(180deg)" }}
				/>
				<Quote>{quote}</Quote>
			</Container>
		)
	}

	return null
}

export default FavoriteBlueprint

// Styled Components

const Container = styled.div`
	position: relative;
	padding: 38px 48px;
	background-color: ${colors.light};
	border-radius: 25px;
	color: ${colors.white};
	z-index: 0;
`

const Quote = styled.p`
	color: ${colors.white};
	${paragraph};
	font-size: 18px;
	text-align: center;
	word-break: break-word;

	@media (max-width: 650px) {
		font-size: 18px;
	}
`
