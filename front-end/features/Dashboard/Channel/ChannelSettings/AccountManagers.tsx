import { useSelector } from "@Redux/store"

import styled from "styled-components"
import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useManagerRole } from "@Redux/slices/dashboard/selectors"
import { useChannelManagers } from "@Hooks/api/useChannelManagers"
import { useUser } from "@Hooks/useUser"
import { Button, SVG, Spinner } from "@Components/shared"
import AboutAccountManagers from "../../modals/AboutAccountManagers"
import AddManager from "../../modals/AddManager"
import ConfirmChangingOwner from "../../modals/ConfirmChangingOwner"
import SetNewOwner from "../../modals/SetNewOwner"
import ManagerRoleChange from "../../modals/ManagerRoleChange"
import DeleteManager from "../../modals/DeleteManager"
import H3 from "../../H3"

const managersOrder = ["Owner", "Administrator", "Editor"]

const AccountManagers = ({ ...props }) => {
	const dispatch = useDispatch()
	const role = useManagerRole()
	const auth = useUser()
	const { type } = useSelector((state) => state.dashboard.modal)

	const { data, isLoading, error } = useChannelManagers()

	return (
		<>
			{type === "About Account Managers" && <AboutAccountManagers />}
			{type === "Confirm Changing Owner" && <ConfirmChangingOwner />}
			{type === "Set New Owner" && <SetNewOwner />}
			{type === "Add Manager" && <AddManager />}
			{type === "Manager Role Change" && <ManagerRoleChange />}
			{type === "Delete Manager" && <DeleteManager />}
			{type === "About Account Managers" && <AboutAccountManagers />}
			<H3>
				ACCOUNT MANAGERS
				<SVG.QuestionMark
					width="20px"
					style={{ position: "relative", top: "4px", left: "12px", cursor: "pointer" }}
					onClick={() => dispatch(setModal({ type: "About Account Managers", data: {} }))}
					dataCy="managers-info-question"
				/>
			</H3>
			{error && <p>Uh oh, an error occurred. Let us know with the error code: 4397, please.</p>}
			{isLoading && <Spinner />}
			{data &&
				data
					.slice()
					// Organize so Owner is always first, Editor is always last
					.sort((a: IManager, b: IManager) => {
						if (managersOrder.indexOf(a.role) === -1) return 1
						if (managersOrder.indexOf(b.role) === -1) return -1
						return managersOrder.indexOf(a.role) - managersOrder.indexOf(b.role)
					})
					.map((manager: IManagerData) => {
						return (
							<Manager key={manager.uid} data-cy="manager">
								<Identity>
									<DisplayName>{manager.displayName}</DisplayName>
									<Email>{manager.email}</Email>
									{role === "Owner" && manager.role === "Owner" && (
										<SVG.Pencil
											width="20px"
											style={{ marginRight: "8px", cursor: "pointer" }}
											onClick={() => dispatch(setModal({ type: "Confirm Changing Owner", data: {} }))}
											dataCy="change-owner-start"
										/>
									)}
									{
										// Never if the manager is the owner
										manager.role !== "Owner" &&
											// Never on yourself
											manager.email !== auth?.email &&
											// Never if you are an editor
											role !== "Editor" &&
											// Never if you are the same role
											role !== manager.role && (
												<>
													<SVG.Pencil
														width="20px"
														style={{ marginRight: "8px", cursor: "pointer" }}
														onClick={() => dispatch(setModal({ type: "Manager Role Change", data: manager }))}
														dataCy={manager.role === "Editor" ? "promote" : "demote"}
													/>
													<SVG.X
														width="24px"
														style={{ cursor: "pointer" }}
														onClick={() => dispatch(setModal({ type: "Delete Manager", data: manager }))}
														dataCy={"remove-manager"}
													/>
												</>
											)
									}
									{role !== "Owner" && manager.email === auth?.email && (
										<SVG.X
											width="24px"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch(setModal({ type: "Delete Manager", data: manager }))}
											dataCy={"remove-manager"}
										/>
									)}
								</Identity>
								<Role>{manager.role}</Role>
							</Manager>
						)
					})}

			{role !== "Editor" && (
				<Button
					design="transparent"
					text="ADD MANAGER"
					onClick={() => dispatch(setModal({ type: "Add Manager", data: {} }))}
					style={{ marginTop: "32px" }}
					dataCy="add-manager-begin"
				/>
			)}
		</>
	)
}

export default AccountManagers

// Styled Components

const Manager = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	border-radius: 20px;

	&:hover {
		background-color: ${colors.darker};
	}
`

const Identity = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`

const DisplayName = styled.p`
	letter-spacing: 2px;
`

const Email = styled.p`
	margin: 0 24px;
	color: ${colors.lightest};
`

const Role = styled.p``
