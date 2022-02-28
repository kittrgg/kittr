import React, { useState, useEffect } from "react"

import { IKitOption, IKitOptionRaw } from "@kittr/types"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import * as Styled from "./style"
import { useOptionsByKitBase } from "@Hooks/api/useOptionsbyKitBase"
import { useIsMounted } from "@Hooks/useIsMounted"
import { getArrayUniques } from "@Utils/helpers/getArrayUniques"
import { useDispatch } from "@Redux/store"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { updateOptions } from "@Redux/slices/dashboard"
import { Selector } from "@Components/shared"

const animationDuration = 1000

const Options = ({ ...props }) => {
	const dispatch = useDispatch()
	const { base, options: current } = useActiveKit()
	const isMounted = useIsMounted()
	const { data: availableOptions, isLoading } = useOptionsByKitBase(base?._id)
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

	const addToOptions = (displayName: string, slot: string) => {
		const newCurrent = current.slice()

		if (displayName === "") {
			const index = newCurrent.findIndex((elem: IKitOption) => elem.slotKey === slot)
			newCurrent.splice(index, 1)
			return dispatch(updateOptions(newCurrent))
		}

		let toAdd = availableOptions.find((opt: IKitOption) => opt.displayName === displayName && opt.slotKey === slot)
		toAdd = { ...toAdd, _id: toAdd.optionId }

		const index = newCurrent.findIndex((elem: IKitOption) => elem.slotKey === toAdd.slotKey)

		if (index > -1) {
			newCurrent[index] = toAdd
		} else {
			newCurrent.push(toAdd)
		}

		if (newCurrent.length > base.gameInfo.maxOptions) return setAnimationTrigger(true)
		return dispatch(updateOptions(newCurrent))
	}

	if (!availableOptions) {
		return (
			<Styled.Container>
				<Styled.Header>ATTACHMENTS</Styled.Header>
				<p style={{ marginTop: "24px" }}>Pick a base up top first.</p>
			</Styled.Container>
		)
	}

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>ATTACHMENTS</Styled.Header>
				<Styled.HeaderHelper animate={animationTrigger} animationDuration={animationDuration}>
					(Limit {base.gameInfo.maxOptions})
				</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.AttachmentsFlex>
				{!isLoading &&
					slots.map((slot: string) => {
						return (
							<div key={slot} style={{ marginBottom: "18px", flexBasis: "40%" }}>
								<Styled.Header>{slot}</Styled.Header>
								<Selector
									className={`${slot.replace(/ /g, "-")}-selector`}
									onChange={(e: any) => addToOptions(e.value, slot)}
									isSearchable={false}
									value={{
										label: current?.find((opt: IKitOption) => opt.slotKey === slot)
											? current.find((opt: IKitOption) => opt.slotKey === slot)?.displayName
											: "-"
									}}
									options={[
										{
											label: "-",
											value: ""
										},
										...availableOptions
											?.filter((opt: IKitOption) => opt.slotKey === slot)
											.sort((a: IKitOptionRaw, b: IKitOptionRaw) => Number(a.orderPlacement) - Number(b.orderPlacement))
											.map((option: IKitOption) => ({
												label: option.displayName,
												value: option.displayName
											}))
									]}
								/>
							</div>
						)
					})}
			</Styled.AttachmentsFlex>
		</Styled.Container>
	)
}

export default Options
