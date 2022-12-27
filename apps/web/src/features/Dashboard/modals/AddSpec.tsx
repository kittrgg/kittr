import ErrorNotification from "./ErrorNotification"
import colors from "@Colors"
import { Button, Modal, Selector, Spinner, TextInputBox } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import { useEffect, useState } from "react"
import styled from "styled-components"

/** Modal for adding or editing a spec to the channel's PC setup. */
const AddSpecModal = () => {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const { data } = useModal()
	const [partType, setPartType] = useState("")
	const [partName, setPartName] = useState("")

	const {
		mutate: updateSpec,
		isLoading: isUpdateLoading,
		error: updateError
	} = useDashboardMutator({
		path: "channels/profile/pc-specs/update",
		opts: {
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
			}
		}
	})

	const {
		mutate: createSpec,
		isLoading: isCreateLoading,
		error: createError
	} = useDashboardMutator({
		path: "channels/profile/pc-specs/create",
		opts: {
			onSuccess: () => {
				dispatch(setModal({ type: "", data: "" }))
			}
		}
	})

	const submit = () => {
		if (data?.id) {
			updateSpec({
				channelId: channelData?.id!,
				pcSpecId: data?.id,
				data: { partType, partName }
			})
		} else {
			createSpec({ channelId: channelData?.id!, data: { partType, partName } })
		}
	}

	useEffect(() => {
		if (data) {
			setPartType(data.partType)
			setPartName(data.partName)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (updateError || createError) return <ErrorNotification />
	if (isUpdateLoading || isCreateLoading) return <Spinner width="24px" />

	return (
		<Modal backgroundClickToClose title="ADD SPEC">
			<Selector
				className="spec-select"
				isCreatable
				onChange={(option: any) => setPartType(option.label.replace(/[^\w\s-]/g, ""))}
				placeholder="Select from list or type here to create your own"
				value={partType ? { label: partType, value: partType } : null}
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
				value={partName}
				onChange={(e) => setPartName(e.target.value)}
				name="specDescription"
				type="text"
				inputStyles={{ marginLeft: "0", width: "100%" }}
			/>
			<Button
				data-cy="confirm-add-spec"
				design="white"
				onClick={submit}
				disabled={!partType || !partName}
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
