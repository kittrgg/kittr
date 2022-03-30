import {
	IRatioOfChannelsWithBase,
	IRatioOfChannelsWithBaseFeatured,
	IForSetupComparison,
	IKitOption
} from "@kittr/types"
import { useState, useEffect } from "react"
import * as Styled from "./style"
import { useActiveWeapon, usePopularityRates } from "@Redux/slices/displayr/selectors"

const Popularity = ({ ...props }) => {
	// const [setupsWithSameAttachmentsRatio, setSetupsWithSameAttachmentsRatio] = useState(0)
	// const activeWeapon = useActiveWeapon()
	// const rates = usePopularityRates()
	// const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = rates

	// const channelsWithBase = ratioOfChannelsWithBase.find(
	// 	(elem: IRatioOfChannelsWithBase) => elem._id === activeWeapon.baseId
	// ) as IRatioOfChannelsWithBase
	// const channelsWithFeatured = ratioOfChannelsWithBaseFeatured.find(
	// 	(elem: IRatioOfChannelsWithBaseFeatured) => elem._id === activeWeapon.baseId
	// ) as IRatioOfChannelsWithBaseFeatured

	// useEffect(() => {
	// 	const activeOptions = activeWeapon?.options?.map((elem: IKitOption) => elem._id)
	// 	const matchedBase = forSetupComparison.find(
	// 		(elem: IForSetupComparison) => elem._id === activeWeapon.baseId
	// 	) as IForSetupComparison
	// 	const matchedBasesAmount = matchedBase?.matches.length
	// 	let matchedAttachmentsCount = 0

	// 	const containsAll = (arr1: string[], arr2: string[]) => arr2.every((arr2Item) => arr1.includes(arr2Item))

	// 	matchedBase?.matches.forEach((elem) => {
	// 		if (elem.length === activeOptions.length && containsAll(elem, activeOptions)) {
	// 			matchedAttachmentsCount = matchedAttachmentsCount + 1
	// 		}
	// 	})

	// 	setSetupsWithSameAttachmentsRatio(matchedAttachmentsCount / matchedBasesAmount)

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [activeWeapon])

	return (
		<Styled.Container data-cy="kit-popularity">
			<Styled.Header>POPULARITY</Styled.Header>
			<p>Under Construction</p>
			{/* <Styled.List>
				<Styled.ListItem>Weapon used by {(channelsWithBase?.ratio * 100).toFixed(1)}% of channels</Styled.ListItem>
				<Styled.ListItem>
					Weapon featured by{" "}
					{isNaN(Number((channelsWithFeatured?.ratio * 100).toFixed(1)))
						? 0
						: (channelsWithFeatured?.ratio * 100).toFixed(1)}
					% of channels
				</Styled.ListItem>
				<Styled.ListItem>
					Same attachments used on {(setupsWithSameAttachmentsRatio * 100).toFixed(1)}% of kits using this base
				</Styled.ListItem>
			</Styled.List> */}
			<Styled.Disclaimer>
				<sup>*</sup> according to kittr data
			</Styled.Disclaimer>
		</Styled.Container>
	)
}

export default Popularity
