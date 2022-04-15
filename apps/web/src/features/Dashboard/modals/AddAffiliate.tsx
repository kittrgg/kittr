import validator from "validator"
import { useState, useEffect } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { Modal, TextInputBox, Button, Spinner } from "@Components/shared"
import { getToken } from "@Services/firebase/auth/getToken"
import { setModal } from "@Redux/slices/dashboard"
import { useModal, useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"

/** Modal for adding a spec to the channel's PC setup. */
const AddAffiliateModal = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const { data } = useModal()

	const [company, setCompany] = useState(data?.company || "")
	const [description, setDescription] = useState(data?.description || "")
	const [code, setCode] = useState(data?.code || "")
	const [url, setUrl] = useState(data?.url || "")
	const { mutate, isLoading } = useDashboardMutator(async () => {
		if (data?.id) {
			return fetch
				.put({
					url: `/api/channel/meta/affiliate`,
					headers: { authorization: `Bearer ${await getToken()}` },
					body: { channelId: channelData?.id, company, description, code, url }
				})
				.then(() => {
					dispatch(setModal({ type: "", data: "" }))
				})
				.catch((err) => {
					dispatch(setModal({ type: "Error Notification", data: "" }))
				})
		} else {
			return fetch
				.post({
					url: `/api/channel/meta/affiliate`,
					headers: { authorization: `Bearer ${await getToken()}` },
					body: { affiliatedId: data?.id, channelId: channelData?.id, company, description, code, url }
				})
				.then(() => {
					dispatch(setModal({ type: "", data: "" }))
				})
				.catch((err) => {
					dispatch(setModal({ type: "Error Notification", data: "" }))
				})
		}
	})

	useEffect(() => {
		if (data?.company) {
			setCompany(data.company)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isLoading) return <Spinner width="24px" />

	return (
		<Modal backgroundClickToClose title="ADD AFFILIATE">
			<InputLabel>Company</InputLabel>
			<TextInputBox
				value={company}
				onChange={(e) => setCompany(e.target.value.replace(/[^\w\s-]/g, ""))}
				name="company"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
			/>

			<InputLabel>
				Deal Description (Ex: "20% 0FF", "BOGO")
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				name="affiliate-description"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
			/>

			<InputLabel>
				Code
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				value={code}
				onChange={(e) => setCode(e.target.value)}
				name="code"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
			/>

			<InputLabel>
				Link
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				name="link"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
			/>

			<Button
				data-cy="confirm-add-affiliate"
				design="white"
				onClick={mutate}
				disabled={!company || ![description, code].some((elem) => elem.length) || (url ? !validator.isURL(url) : false)}
				text="SAVE"
				style={{ margin: "84px auto 0" }}
			/>
		</Modal>
	)
}

export default AddAffiliateModal

// Styled Components

const InputLabel = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	${paragraph};
	margin-top: 40px;
	margin-bottom: 12px;
	color: ${colors.lighter};
`

const Optional = styled.span`
	${paragraph};
	color: ${colors.lighter};
	font-style: italic;
`
