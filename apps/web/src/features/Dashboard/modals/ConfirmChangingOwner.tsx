import styled from "styled-components"
import colors from "@Colors"

import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { Modal, Button } from "@Components/shared"
import { header2, paragraph } from "@Styles/typography"

/** Modal for confirming a change of owner on the channel. */
const ConfirmChangingOwner = ({ ...props }) => {
	const dispatch = useDispatch()

	return (
		<Modal backgroundClickToClose title="WAIT A MINUTE...">
			<Paragraph>
				ARE YOU SURE YOU WANT TO <Red>DEMOTE YOURSELF TO ADMINISTRATOR</Red> AND REASSIGN A NEW CHANNEL OWNER?
			</Paragraph>
			<Warning>You will lose all sorts of abilities. Check the Roles Grid for more.</Warning>
			<RowFlex>
				<Button
					design="transparent"
					text="NO, KEEP OWNER STATUS"
					onClick={() => dispatch(setModal({ type: "", data: {} }))}
					style={{ margin: "0 auto" }}
				/>
				<Button
					design="white"
					text={"YES, PICK A NEW OWNER"}
					onClick={() => dispatch(setModal({ type: "Set New Owner", data: {} }))}
					style={{ margin: "0 auto", marginLeft: "24px" }}
					dataCy="confirm-changing-owner"
				/>
			</RowFlex>
		</Modal>
	)
}

export default ConfirmChangingOwner

// Styled Components

const Red = styled.em`
	color: ${colors.red};
`

const Paragraph = styled.p`
	margin: 0 auto;
	margin-bottom: 32px;
	${header2};
`

const RowFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`

const Warning = styled.p`
	margin-top: 64px;
	margin-bottom: 32px;
	color: ${colors.red};
	${paragraph};
	text-align: center;
`
