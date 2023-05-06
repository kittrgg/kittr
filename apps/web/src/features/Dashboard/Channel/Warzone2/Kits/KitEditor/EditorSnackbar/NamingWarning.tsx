import colors from "@Colors"
import Button from "@Components/shared/Button"
import Modal from "@Components/shared/Modal"
import SVG from "@Components/shared/SVG"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

function NamingWarning({ ...props }) {
	const dispatch = useDispatch()

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Text>YOU CAN'T MAKE TWO KITS WITH THE SAME NAME + DESCRIPTION.</Text>
			<Grid>
				<div>
					<SVG.X fill={colors.red} width="24px" />
				</div>
				<div>
					<SVG.CheckMark stroke={colors.green} width="32px" />
				</div>
				<div>M16 & M16</div>
				<div>M16 & M16 (Alt)</div>
				<div>XM4 (Range) & XM4 (Range)</div>
				<div>XM4 (Range) & XM4 (Secondary)</div>
				<div>-</div>
				<div>Kar98k (Quick Scopes) & Swiss K31 (Quick Scopes)</div>
			</Grid>

			<Button
				design="transparent"
				onClick={() => dispatch(setModal({ type: "", data: {} }))}
				style={{ margin: "0 auto" }}
				text="BACK"
			/>
		</Modal>
	)
}

export default NamingWarning

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	color: ${colors.lighter};
	margin-bottom: 36px;
	font-size: 18px;
	text-align: center;
	line-height: 200%;
`

const Text = styled.p`
	width: 75%;
	margin: 0 auto;
	margin-bottom: 24px;
	${header2};
	line-height: 200%;
`
