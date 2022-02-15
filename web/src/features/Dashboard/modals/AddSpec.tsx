import { useState, useEffect } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { Modal, Selector, TextInputBox, Button, Spinner } from "@Components/shared"
import { getToken } from "@Services/firebase/auth/getToken"
import { setModal } from "@Redux/slices/dashboard"
import ErrorNotification from "./ErrorNotification"
import { useModal, useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"

/** Modal for adding a spec to the channel's PC setup. */
const AddSpecModal = ({ ...props }) => {
	const dispatch = useDispatch()
	const { _id } = useChannelData()
	const { data } = useModal()
	const [keyName, setKeyName] = useState("")
	const [description, setDescription] = useState("")

	const { mutate, isLoading, error } = useDashboardMutator(async () => {
		const result = await fetch.post({
			url: `/api/channel/meta/specs`,
			headers: { authorization: `Bearer ${await getToken()}` },
			body: { _id, keyName, description }
		})

		if (result) {
			dispatch(setModal({ type: "", data: "" }))
		}
	})

	useEffect(() => {
		if (data?.keyName) {
			setKeyName(data.keyName)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (error) return <ErrorNotification />
	if (isLoading) return <Spinner width="24px" />

	return (
		<Modal backgroundClickToClose title="ADD SPEC">
			<Selector
				className="spec-select"
				isCreatable
				onChange={(option: any) => setKeyName(option.label.replace(/[^\w\s-]/g, ""))}
				placeholder="Select from list or type here to create your own"
				value={keyName ? { label: keyName, value: keyName } : null}
				styles={{
					container: (base, state) => ({
						...base,
						minWidth: "620px",
						height: "100%",
						color: colors.white
					}),
					control: (base, state) => ({
						...base,
						padding: "8px 16px",
						backgroundColor: colors.darker,
						cursor: "pointer",
						boxShadow: "0",
						minHeight: "40px",
						color: colors.white,
						border: "none",
						borderRadius: "20px"
					})
				}}
				options={[
					"Case",
					"CPU",
					"CPU Cooler",
					"Motherboard",
					"RAM",
					"Storage",
					"GPU",
					"PSU",
					"Monitor",
					"Keyboard",
					"Mouse"
				].map((elem) => ({
					value: elem,
					label: elem
				}))}
			/>
			<InputLabel>Description</InputLabel>
			<TextInputBox
				data-cy="input-spec-name"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				name="specDescription"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%" }}
			/>
			<Button
				data-cy="confirm-add-spec"
				design="white"
				onClick={mutate}
				disabled={!keyName || !description}
				text="SAVE"
				style={{ margin: "84px auto 0" }}
			/>
		</Modal>
	)
}

export default AddSpecModal

// Styled Components

const InputLabel = styled.p`
	${paragraph};
	margin-top: 28px;
	margin-bottom: 20px;
	color: ${colors.lighter};
`
