import * as Styled from "./style"
import colors from "@Colors"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

const FavoriteBlueprint = () => {
	const activeWeapon = useActiveWeapon()
	const favorite = activeWeapon?.blueprint

	if (favorite) {
		return (
			<Container>
				<Styled.Header style={{ marginBottom: "24px" }}>FAVORITE BLUEPRINT:</Styled.Header>
				<Blueprint>{favorite || "None"}</Blueprint>
			</Container>
		)
	}

	return null
}

export default FavoriteBlueprint

// Styled Components

const Container = styled.div`
	position: relative;
	padding: 20px;
	background-color: ${colors.light};
	border-radius: 25px;
	color: ${colors.white};
`

const Blueprint = styled.p`
	color: ${colors.white};
	${paragraph};
	font-size: 24px;
	text-align: center;

	@media (max-width: 650px) {
		font-size: 18px;
	}
`
