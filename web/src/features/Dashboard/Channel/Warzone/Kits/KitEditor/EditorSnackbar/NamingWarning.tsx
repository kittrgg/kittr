import styled from "styled-components"
import colors from "@Colors"

import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"

import Modal from "@Components/shared/Modal"
import Button from "@Components/shared/Button"
import SVG from "@Components/shared/SVG"
import { header2 } from "@Styles/typography"

const NamingWarning = ({ ...props }) => {
	const dispatch = useDispatch()

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Text>YOU CAN'T MAKE TWO KITS WITH THE SAME NAME + DESCRIPTION.</Text>
			<Grid>
				<div>
					<SVG.X width="24px" fill={colors.red} />
				</div>
				<div>
					<SVG.CheckMark width="32px" stroke={colors.green} />
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
				text="BACK"
				onClick={() => dispatch(setModal({ type: "", data: {} }))}
				style={{ margin: "0 auto" }}
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
