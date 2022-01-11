import styled from "styled-components"

import { Modal, ContactUs } from "@Components/shared"
import { header2 } from "@Styles/typography"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"

/** Support modal to allow users to find ways to contact us. */
const SupportModal = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data } = useModal()
	const { isTutorial, page } = data

	return (
		<Modal
			backgroundClickToClose={!isTutorial}
			title="NEED SOME HELP?"
			onUserClose={() => {
				if (isTutorial && page === 7) {
					dispatch(setModal({ type: "Tutorial", data: { page: 7 } }))
				}
			}}
		>
			<Subheader>GOOD COMMS. WE'VE GOT YOUR BACK.</Subheader>
			<ContactHelper>
				<ContactUs />
			</ContactHelper>
		</Modal>
	)
}

export default SupportModal

// Styled Components

const Subheader = styled.p`
	${header2};
`

const ContactHelper = styled.div`
	width: 80vw;
	margin-top: 32px;
`
