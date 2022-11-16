import colors from "@Colors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useAllKitBases } from "@Hooks/trpc/useAllKitBases"
import { WarzoneKit, WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"
import { clearKitEditor, resetToInitialKit, setModal } from "@Redux/slices/dashboard"
import { useActiveKit, useChannelData, useInitialKit, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import { isFetchError } from "@Utils/helpers/typeGuards"
import styled from "styled-components"
import NamingWarning from "./NamingWarning"

const EditorSnackbar = () => {
	const dispatch = useDispatch()
	const initialKit = useInitialKit()
	const activeKit = useActiveKit()
	const { data: channelData } = useChannelData()
	const modal = useModal()
	const { data: allKitBases } = useAllKitBases({ include: { category: true } })
	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/kits/upsert",
		opts: {
			onMutate: () => {
				// Grab the existing kit array and map them to just their titles
				let kitArr = channelData?.warzoneKits.slice() as Array<
					Omit<WarzoneKit, "id"> & { id?: string; base: WarzoneKitBase; options: WarzoneKitOption[] }
				>

				// Grab the new kit's name
				const newKitName = activeKit.base.displayName + activeKit.customTitle

				// Is this an existing kit being updated?
				let index = channelData?.warzoneKits.findIndex((kit) => kit.id === activeKit.id) ?? -1 // -1 means there's no kit

				if (!kitArr) {
					return
				}

				if (index !== -1) {
					// Replace the existing kit with its new data
					kitArr[index] = activeKit
				} else {
					// Add the new kit to the array
					kitArr.push(activeKit)
				}

				if (
					kitArr
						.map((kit) => ({
							...kit,
							base:
								allKitBases?.find((allBase) => {
									return allBase.id === kit.base.id
								}) || activeKit.base
						}))
						// Map to just the names
						.map((kit) => {
							return kit.base.displayName + kit.customTitle
						})

						// Compare to ensure that there are no dupes
						.filter((existingKitName) => newKitName === existingKitName).length > 1
				) {
					return dispatch(setModal({ type: "Kit Naming Warning", data: {} }))
				}
			},
			onSuccess: (result: any) => {
				if (isFetchError(result)) {
					dispatch(setModal({ type: "Error Notification", data: {} }))
				} else {
					dispatch(clearKitEditor())
				}
			},
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	const hasChanges = () => {
		const changes = []

		if (
			initialKit.base === activeKit.base &&
			initialKit.featured === activeKit.featured &&
			initialKit.customTitle === activeKit.customTitle &&
			initialKit.blueprint === activeKit.blueprint &&
			initialKit.youtubeUrl === activeKit.youtubeUrl &&
			initialKit.tiktokUrl === activeKit.tiktokUrl &&
			initialKit.quote === activeKit.quote
		) {
			changes.push(false)
		} else {
			changes.push(true)
		}

		if (
			initialKit.options.length === activeKit.options.length &&
			initialKit.options.every((elem) => activeKit.options.some((opt) => opt.id === elem.id))
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

	const upsertKit = () => {
		// Grab the existing kit array and map them to just their titles
		let kitArr = channelData?.warzoneKits.slice() as Array<
			Omit<WarzoneKit, "id"> & { id?: string; base: WarzoneKitBase; options: WarzoneKitOption[] }
		>

		// Grab the new kit's name
		const newKitName = activeKit.base.displayName + activeKit.customTitle

		// Is this an existing kit being updated?
		let index = channelData?.warzoneKits.findIndex((kit) => kit.id === activeKit.id) ?? -1 // -1 means there's no kit

		if (!kitArr) {
			return
		}

		if (index !== -1) {
			// Replace the existing kit with its new data
			kitArr[index] = activeKit
		} else {
			// Add the new kit to the array
			kitArr.push(activeKit)
		}

		if (
			kitArr
				.map((kit) => ({
					...kit,
					base:
						allKitBases?.find((allBase) => {
							return allBase.id === kit.base.id
						}) || activeKit.base
				}))
				// Map to just the names
				.map((kit) => {
					return kit.base.displayName + kit.customTitle
				})

				// Compare to ensure that there are no dupes
				.filter((existingKitName) => newKitName === existingKitName).length > 1
		) {
			return dispatch(setModal({ type: "Kit Naming Warning", data: {} }))
		}

		mutate({
			channelId: channelData?.id!,
			kit: {
				channelId: channelData?.id!,
				id: initialKit.id,
				gameId: activeKit.base.gameId,
				baseId: activeKit.base.id,
				customTitle: activeKit.customTitle,
				options: activeKit.options,
				blueprint: activeKit.blueprint,
				featured: activeKit.featured,
				youtubeUrl: activeKit.youtubeUrl,
				tiktokUrl: activeKit.tiktokUrl,
				quote: activeKit.quote
			},
			gameView: ""
		})
	}

	const isNewKit = !initialKit.id

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
					<SaveButton onClick={upsertKit} disabled={Object.keys(activeKit.base).length === 0} data-cy="save-kit-button">
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

