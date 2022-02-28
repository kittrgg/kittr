import { IKitBase, IKitOption } from "@kittr/types"
import colors from "@Colors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useAllKitBases } from "@Hooks/api/useAllKitBases"
import { useUser } from "@Hooks/useUser"
import { clearKitEditor, resetToInitialKit, setModal } from "@Redux/slices/dashboard"
import { useActiveKit, useChannelData, useInitialKit, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"
import NamingWarning from "./NamingWarning"
import fetch from "@Fetch"
import { isFetchError } from "@Utils/helpers/typeGuards"

const EditorSnackbar = () => {
	const dispatch = useDispatch()
	const initialKit = useInitialKit()
	const activeKit = useActiveKit()
	const { _id, kits } = useChannelData()
	const user = useUser()
	const modal = useModal()
	const { data: allKitBases } = useAllKitBases()
	const { mutate, isLoading } = useDashboardMutator(async () => {
		// Grab the existing kit array and map them to just their titles
		let kitArr = kits.slice()

		// Grab the new kit's name
		const newKitName = activeKit.base.displayName + activeKit.userData.customTitle

		// Is this an existing kit being updated?
		let index = kits.findIndex((kit) => kit._id === activeKit._id)
		if (index !== -1) {
			// Replace the existing kit with its new data
			kitArr[index] = activeKit as any
		} else {
			// Add the new kit to the array
			kitArr.push(activeKit as any)
		}

		if (
			kitArr
				.map((kit) => ({
					...kit,
					base: allKitBases!.find((allBase: IKitBase) => allBase._id === kit.baseId) || activeKit
				}))
				// Map to just the names
				.map((kit) => (kit.base as IKitBase).displayName + kit.userData.customTitle)

				// Compare to ensure that there are no dupes
				.filter((existingKitName) => newKitName === existingKitName).length > 1
		) {
			return dispatch(setModal({ type: "Kit Naming Warning", data: {} }))
		}

		try {
			const result = await fetch.post({
				url: `/api/channel/kit`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: {
					channelId: _id,
					kitId: initialKit._id || undefined,
					kitBase: activeKit.base._id,
					customTitle: activeKit.userData.customTitle,
					options: activeKit.options,
					blueprint: activeKit.userData.blueprint,
					featured: activeKit.userData.featured,
					youtubeURL: activeKit.userData.youtubeURL,
					tiktokId: activeKit.userData.tiktokId,
					quote: activeKit.userData.quote,
					previousUpdater: user?.displayName || user?.email
				}
			})

			if (isFetchError(result)) {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			} else {
				dispatch(clearKitEditor())
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const hasChanges = () => {
		const changes = []

		if (
			initialKit.base === activeKit.base &&
			initialKit.userData.featured === activeKit.userData.featured &&
			initialKit.userData.customTitle === activeKit.userData.customTitle &&
			initialKit.userData.blueprint === activeKit.userData.blueprint &&
			initialKit.userData.youtubeURL === activeKit.userData.youtubeURL &&
			initialKit.userData.tiktokId === activeKit.userData.tiktokId &&
			initialKit.userData.quote === activeKit.userData.quote
		) {
			changes.push(false)
		} else {
			changes.push(true)
		}

		if (
			initialKit.options.length === activeKit.options.length &&
			initialKit.options.every((elem: IKitOption) => activeKit.options.some((opt: IKitOption) => opt._id === elem._id))
		) {
			changes.push(false)
		} else {
			changes.push(true)
		}

		return changes.some((elem) => elem == true)
	}

	const reset = () => {
		dispatch(resetToInitialKit())
	}

	const isNewKit = !initialKit._id

	return (
		<>
			{modal.type == "Kit Naming Warning" && <NamingWarning />}
			<Container active={isNewKit || hasChanges()}>
				<HorizFlex>
					<img src="/media/icons/alert-circle.svg" alt="" width={25} height={25} />
					<WarningText>{isNewKit ? "Kit created...but not saved yet." : "You have unsaved changes"}</WarningText>
				</HorizFlex>
				<HorizFlex>
					{!isNewKit && <ResetButton onClick={reset}>Reset</ResetButton>}
					<SaveButton onClick={mutate} disabled={Object.keys(activeKit.base).length === 0} data-cy="save-kit-button">
						{isLoading ? "..." : "Save"}
					</SaveButton>
				</HorizFlex>
			</Container>
		</>
	)
}

export default EditorSnackbar

// Styled Components

const Container = styled.div<{ active: boolean }>`
	position: fixed;
	bottom: ${(props) => (props.active ? "0px" : "-55px")};
	right: 20px;
	left: 175px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: ${colors.middle};
	transition: 0.2s;
`

const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const WarningText = styled.p`
	padding-left: 24px;
	color: ${colors.red};
	${paragraph};
`

const ResetButton = styled.button`
	appearance: none;
	border: none;
	background-color: transparent;
	margin-right: 24px;
	padding: 8px;
	border-radius: 15px;
	color: ${colors.white};
	${paragraph};
	letter-spacing: 4px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.white};
		color: ${colors.dark};
	}
`

const SaveButton = styled.button`
	appearance: none;
	border: none;
	background-color: ${colors.green};
	margin-right: 24px;
	padding: 8px 24px;
	border-radius: 15px;
	color: ${colors.white};
	${paragraph};
	letter-spacing: 4px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.white};
		color: ${colors.dark};
	}

	&:disabled {
		opacity: 0.3;
		cursor: initial;
		background-color: ${colors.green};
		color: ${colors.white};
	}
`
