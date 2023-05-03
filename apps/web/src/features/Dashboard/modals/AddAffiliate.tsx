import colors from "@Colors"
import { Button, Modal, Spinner, TextInputBox } from "@Components/shared"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"
import validator from "validator"
import { trpc } from "@/lib/trpc"

/** Modal for adding a spec to the channel's PC setup. */
function AddAffiliateModal() {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const { refetch: refetchDashboard } = useDashboardChannel()
	const { data } = useModal()

	const [company, setCompany] = useState(data?.company || "")
	const [description, setDescription] = useState(data?.description || "")
	const [code, setCode] = useState(data?.code || "")
	const [url, setUrl] = useState(data?.url || "")

	const { mutate: createAffiliate, isLoading: isCreatingAffiliate } =
		trpc.channels.profile.affiliates.create.useMutation({
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
				refetchDashboard()
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: "" }))
			}
		})

	const { mutate: updateAffiliate, isLoading: isUpdatingAffiliate } =
		trpc.channels.profile.affiliates.update.useMutation({
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
				refetchDashboard()
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: "" }))
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
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
				name="company"
				onChange={(e) => setCompany(e.target.value.replace(/[^\w\s-]/g, ""))}
				type="text"
				value={company}
			/>

			<InputLabel>
				Deal Description (Ex: "20% 0FF", "BOGO")
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
				name="affiliate-description"
				onChange={(e) => setDescription(e.target.value)}
				type="text"
				value={description}
			/>

			<InputLabel>
				Code
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
				name="code"
				onChange={(e) => setCode(e.target.value)}
				type="text"
				value={code}
			/>

			<InputLabel>
				Link
				<Optional>Optional</Optional>
			</InputLabel>
			<TextInputBox
				inputStyles={{ marginLeft: "0", width: "100%", minWidth: "700px" }}
				name="link"
				onChange={(e) => setUrl(e.target.value)}
				type="text"
				value={url}
			/>

			<Button
				data-cy="confirm-add-affiliate"
				design="white"
				disabled={!company || ![description, code].some((elem) => elem.length) || (url ? !validator.isURL(url) : false)}
				onClick={submit}
				style={{ margin: "84px auto 0" }}
				text="SAVE"
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
