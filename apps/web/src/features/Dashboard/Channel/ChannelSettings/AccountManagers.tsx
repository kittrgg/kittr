import { useSelector } from "@Redux/store"

import styled from "styled-components"
import colors from "@Colors"
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
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { ChannelManagerRoles } from "@kittr/prisma"
import { capitalizeFirstCharacter } from "@Utils/helpers/capitalizeFirstCharacter"

const managersOrder: ChannelManagerRoles[] = ["OWNER", "ADMIN", "EDITOR"]

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
				customOrderArray<typeof data[0]>({
					array: data,
					sortingArray: managersOrder,
					keyToSort: "role"
				}).map((manager: typeof data[0]) => {
					return (
						<Manager key={manager.uid} data-cy="manager">
							<Identity>
								<DisplayName>{manager.displayName}</DisplayName>
								<Email>{manager.email}</Email>
								{role === "OWNER" && manager.role === "OWNER" && (
									<SVG.Pencil
										width="20px"
										style={{ marginRight: "8px", cursor: "pointer" }}
										onClick={() => dispatch(setModal({ type: "Confirm Changing Owner", data: {} }))}
										dataCy="change-owner-start"
									/>
								)}
								{
									// Never if the manager is the owner
									manager.role !== "OWNER" &&
										// Never on yourself
										manager.email !== auth?.email &&
										// Never if you are an editor
										role !== "EDITOR" &&
										// Never if you are the same role
										role !== manager.role && (
											<>
												<SVG.Pencil
													width="20px"
													style={{ marginRight: "8px", cursor: "pointer" }}
													onClick={() => dispatch(setModal({ type: "Manager Role Change", data: manager }))}
													dataCy={manager.role === "EDITOR" ? "promote" : "demote"}
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
								{role !== "OWNER" && manager.email === auth?.email && (
									<SVG.X
										width="24px"
										style={{ cursor: "pointer" }}
										onClick={() => dispatch(setModal({ type: "Delete Manager", data: manager }))}
										dataCy={"remove-manager"}
									/>
								)}
							</Identity>
							<Role>{capitalizeFirstCharacter(manager.role)}</Role>
						</Manager>
					)
				})}

			{role !== "EDITOR" && (
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
	color: ${colors.white};
`

const Role = styled.p``
