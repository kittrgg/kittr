import React, { useState, useEffect } from "react"

import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import * as Styled from "./style"
import { useOptionsByKitBase } from "@Hooks/api/useOptionsbyKitBase"
import { useIsMounted } from "@Hooks/useIsMounted"
import { getArrayUniques } from "@Utils/helpers/getArrayUniques"
import { useDispatch } from "@Redux/store"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { updateOptions } from "@Redux/slices/dashboard"
import { Selector } from "@Components/shared"
import { Loader } from "@kittr/ui"

const animationDuration = 1000

const Options = () => {
	const dispatch = useDispatch()
	const { base, options: current } = useActiveKit()
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

	const addToOptions = (displayName: string, slot: string) => {
		const newCurrent = current.slice()

		if (displayName === "") {
			const index = newCurrent.findIndex((elem) => elem.slotKey === slot)
			newCurrent.splice(index, 1)
			return dispatch(updateOptions(newCurrent))
		}

		let toAdd = availableOptions?.find((opt) => opt.displayName === displayName && opt.slotKey === slot)

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
				{!isLoading && availableOptions &&
					slots?.map((slot: string) => {
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
							</div>
						)
					})}
			</Styled.AttachmentsFlex>
		</Styled.Container>
	)
}

export default Options
