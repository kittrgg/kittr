import * as Styled from "./style"
import colors from "@Colors"
import { Selector } from "@Components/shared"
import { useOptionsByKitBase } from "@Hooks/api/useOptionsbyKitBase"
import { useIsMounted } from "@Hooks/useIsMounted"
import { updateOptions, updateTunes } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getArrayUniques } from "@Utils/helpers/getArrayUniques"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { WarzoneKitOption, WarzoneTwoKitOption, WarzoneTwoKitOptionTuning } from "@kittr/prisma"
import { Loader, TextInput } from "@kittr/ui"
import { Grid } from "@mantine/core"
import React, { useState, useEffect } from "react"

const animationDuration = 1000

export const handleHorzTuneName = (slotName: string) => {
	switch (slotName) {
		case "Optic":
			return "Eye Position"
		case "Ammunition":
			return "Load"
		case "Rear Grip":
			return "Width"
		case "Comb":
			return "Thickness"
		default:
			return "Length"
	}
}

const Options = () => {
	const dispatch = useDispatch()
	const { base, options: current, tuning, id: activeKitId } = useActiveKit()
	const isMounted = useIsMounted()
	const { data: availableOptions, isLoading } = useOptionsByKitBase(base?.id)
	const [animationTrigger, setAnimationTrigger] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			if (isMounted()) {
				setAnimationTrigger(false)
			}
		}, animationDuration)
	}, [animationTrigger, isMounted])

	const slots =
		availableOptions &&
		getArrayUniques(availableOptions, "slotKey").sort(
			(a: string, b: string) => warzoneSlotsOrder.indexOf(a) - warzoneSlotsOrder.indexOf(b)
		)

	const addToOptions = (inputValue: string, slot: string, activeTune?: "horz" | "vert", tuneIdx?: number) => {
		const newCurrent: WarzoneKitOption[] | WarzoneTwoKitOption[] = current.slice()

		// When tune input is being adjusted
		if (activeTune && tuneIdx !== undefined && tuneIdx !== -1) {
			const newTune = parseFloat(inputValue)
			// copy tuning array
			const copyTunes: Omit<WarzoneTwoKitOptionTuning[], "id"> = [...tuning]

			// copy tune object to mutate
			const copyTune = {
				...copyTunes[tuneIdx],
				kitOptionId: newCurrent[tuneIdx].id,
				kitId: activeKitId!
			}
			copyTune[activeTune] = newTune

			// if tune doesn't exist - set default value to 0
			if (!copyTune.hasOwnProperty("horz")) {
				copyTune["horz"] = 0
			}
			if (!copyTune.hasOwnProperty("vert")) {
				copyTune["vert"] = 0
			}

			// assign mutated tune object to correctly indexed tunes copy
			copyTunes[tuneIdx] = copyTune

			return dispatch(updateTunes(copyTunes))
		}

		if (inputValue === "") {
			const index = newCurrent.findIndex((elem) => elem.slotKey === slot)
			newCurrent.splice(index, 1)
			return dispatch(updateOptions(newCurrent))
		}

		const toAdd = availableOptions?.find((opt) => opt.displayName === inputValue && opt.slotKey === slot)

		const index = newCurrent.findIndex((elem) => elem.slotKey === toAdd?.slotKey)

		if (!toAdd) return

		if (index > -1) {
			newCurrent[index] = toAdd
		} else {
			newCurrent.push(toAdd)
		}

		if (newCurrent.length > base.maxOptions) return setAnimationTrigger(true)
		return dispatch(updateOptions(newCurrent))
	}

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>ATTACHMENTS</Styled.Header>
				<Styled.HeaderHelper animate={animationTrigger} animationDuration={animationDuration}>
					(Limit {base.maxOptions})
				</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.AttachmentsFlex>
				{isLoading && <Loader />}
				{!isLoading &&
					availableOptions &&
					slots?.map((slot: string, idx) => {
						return (
							<div key={slot} style={{ marginBottom: "18px", flexBasis: "40%" }}>
								<Styled.Header>{slot}</Styled.Header>
								<Selector
									className={`${slot.replace(/ /g, "-")}-selector`}
									onChange={(e: any) => addToOptions(e.value, slot)}
									isSearchable={false}
									value={{
										label: current?.find((opt) => opt.slotKey === slot)
											? current.find((opt) => opt.slotKey === slot)?.displayName
											: "-"
									}}
									options={[
										{
											label: "-",
											value: ""
										},
										...availableOptions
											?.filter((opt) => opt.slotKey === slot)
											.sort((a, b) => Number(a.orderPlacement) - Number(b.orderPlacement))
											.map((option) => ({
												label: option.displayName,
												value: option.displayName
											}))
									]}
								/>
								{current.find((opt) => opt.slotKey === slot)?.displayName && (
									<Grid>
										<Grid.Col span={6}>
											<TextInput
												onChange={(e) => addToOptions(e.target.value, slot, "horz", idx)}
												type="number"
												step={0.1}
												// TODO: i don't have a clue how to handle this typescript
												value={tuning[idx]?.horz ?? 0}
												label={handleHorzTuneName(slot)}
												radius="md"
												size="sm"
												sx={{ input: { background: colors.light } }}
											/>
										</Grid.Col>
										<Grid.Col span={6}>
											<TextInput
												type="number"
												step={0.1}
												onChange={(e) => addToOptions(e.target.value, slot, "vert", idx)}
												value={tuning[idx]?.vert ?? 0}
												label="Weight"
												radius="md"
												size="sm"
												sx={{ input: { background: colors.light } }}
											/>
										</Grid.Col>
									</Grid>
								)}
							</div>
						)
					})}
			</Styled.AttachmentsFlex>
		</Styled.Container>
	)
}

export default Options
