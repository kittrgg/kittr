import colors from "@Colors"
import { Button, Modal, Spinner, TextInputBox } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"
import validator from "validator"

/** Modal for adding a spec to the channel's PC setup. */
const AddAffiliateModal = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const { data } = useModal()

	const [company, setCompany] = useState(data?.company || "")
	const [description, setDescription] = useState(data?.description || "")
	const [code, setCode] = useState(data?.code || "")
	const [url, setUrl] = useState(data?.url || "")

	const { mutate: createAffiliate, isLoading: isCreatingAffiliate } = useDashboardMutator({
		path: "channels/profile/affiliates/create",
		opts: {
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: "" }))
			}
		}
	})

	const { mutate: updateAffiliate, isLoading: isUpdatingAffiliate } = useDashboardMutator({
		path: "channels/profile/affiliates/update",
		opts: {
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: "" }))
			}
		}
	})

	const submit = () => {
		if (data?.id) {
			updateAffiliate({ channelId: channelData?.id!, data: { id: data?.id!, company, description, code, url } })
		} else {
			createAffiliate({ channelId: channelData?.id!, data: { company, description, code, url } })
		}
	}

	useEffect(() => {
		if (data?.company) {
			setCompany(data.company)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isCreatingAffiliate || isUpdatingAffiliate) return <Spinner width="24px" />

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
				onClick={submit}
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
