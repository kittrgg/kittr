import styled from "styled-components"

import { useModal, useChannelData, useActiveKit } from "@Redux/slices/dashboard/selectors"
import KitDeleteConfirmation from "../../../modals/KitDeleteConfirmation"
import KitsPlaceholder from "./KitsPlaceholder"
import KitList from "./KitList"
import KitEditor from "./KitEditor"
// import EditNotification from "./EditNotification"

const Kits = ({ ...props }) => {
	const channelData = useChannelData()
	const activeKit = useActiveKit()
	const modal = useModal()

	if (channelData.kits.length === 0 && Object.keys(activeKit).length === 0) {
		return (
			<Container style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
				<KitsPlaceholder />
			</Container>
		)
	}

	return (
		<>
			{/* <EditNotification /> */}
			{modal.type === "Kit Delete Confirmation" && <KitDeleteConfirmation />}
			<Container>
				<KitList />
				{Object.keys(activeKit).length === 0 && (
					<EditorPlaceholderContainer>
						<EditorPlaceholderMessage>Select a kit from your list to the left.</EditorPlaceholderMessage>
					</EditorPlaceholderContainer>
				)}
				{Object.keys(activeKit).length > 0 && <KitEditor />}
			</Container>
		</>
	)
}

export default Kits

// Styled Components

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding: 12px 30px 60px;
	overflow-y: auto;
`

const EditorPlaceholderContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const EditorPlaceholderMessage = styled.p`
	font-size: 22px;
	letter-spacing: 2px;
`
