import { useState } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { IManagerData } from "@kittr/types"
import { header2, montserrat } from "@Styles/typography"
import { getToken } from "@Services/firebase/auth/getToken"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useChannelManagers } from "@Hooks/api/useChannelManagers"
import { Modal, Button, Spinner } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Modal to allow a user to set a new owner for the channel. */
const SetNewOwner = () => {
	const dispatch = useDispatch()
	const [newOwner, setNewOwner] = useState("-")
	const { data: channelData } = useChannelData()
	const { data, isLoading } = useChannelManagers()
	const { refetch: refetchChannel } = useDashboardChannel()

	const { mutate: mutateOwner, isLoading: isMutatingOwner } = useDashboardMutator({
		path: "channels/managers/owner/edit",
		opts: {
			onSuccess: () => refetchChannel()
		}
	})

	return (
		<Modal backgroundClickToClose title="CHOOSE NEW OWNER">
			<Paragraph>CHOOSE A NEW OWNER FOR THIS CHANNEL'S ACCOUNT BELOW.</Paragraph>
			{isLoading && <Spinner />}
			{data && (
				<>
					<RowFlex>
						<ColumnFlex>
							<Select
								style={{ width: "100%" }}
								value={newOwner}
								onChange={(e) => setNewOwner(e.target.value)}
								data-cy="selector-new-manager"
							>
								<option value="">-</option>
								{data
									.filter((manager) => manager.role !== "OWNER")
									.map((elem: IManagerData) => (
										<option key={elem.email} value={elem.email}>
											{elem.email}
										</option>
									))}
							</Select>
						</ColumnFlex>
					</RowFlex>
					<RowFlex>
						<Button
							design="transparent"
							text="CANCEL"
							onClick={() => dispatch(setModal({ type: "", data: {} }))}
							style={{ margin: "0 auto" }}
						/>
						<Button
							design="white"
							text={isMutatingOwner ? "..." : "CONFIRM NEW OWNER"}
							disabled={isMutatingOwner || newOwner === "-"}
							onClick={async () => mutateOwner({ channelId: channelData?.id!, newOwnerEmail: newOwner })}
							style={{ margin: "0 auto" }}
							dataCy="final-change-owner"
						/>
					</RowFlex>
				</>
			)}
		</Modal>
	)
}

export default SetNewOwner

// Styled Components

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

const ColumnFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 45%;
	height: 92px;
`

const Select = styled.select`
	appearance: none;
	background: transparent;
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-image: url("/media/select-arrow.svg");
	padding: 12px;
	padding-right: 36px;
	border: none;
	border-bottom: 1px solid ${colors.lightest};
	outline: none;
	color: ${colors.lighter};
	${montserrat};
	cursor: pointer;
	transition: 0.2s;

	option {
		background-color: ${colors.dark};
		color: ${colors.white};
	}

	&:hover {
		background-color: ${colors.white};
		border-radius: 12px;
	}

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`
