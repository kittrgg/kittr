import * as Styled from './style';

// Import { useActiveWeapon, usePopularityRates } from "@Redux/slices/displayr/selectors"
// Import {
// 	IRatioOfChannelsWithBase,
// 	IRatioOfChannelsWithBaseFeatured,
// 	IForSetupComparison,
// 	IKitOption
// } from "@kittr/types"
// Import { useState, useEffect } from "react"

function Popularity() {
  // Const [setupsWithSameAttachmentsRatio, setSetupsWithSameAttachmentsRatio] = useState(0)
  // Const activeWeapon = useActiveWeapon()
  // Const rates = usePopularityRates()
  // Const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = rates

  // Const channelsWithBase = ratioOfChannelsWithBase.find(
  // 	(elem: IRatioOfChannelsWithBase) => elem._id === activeWeapon.baseId
  // ) as IRatioOfChannelsWithBase
  // Const channelsWithFeatured = ratioOfChannelsWithBaseFeatured.find(
  // 	(elem: IRatioOfChannelsWithBaseFeatured) => elem._id === activeWeapon.baseId
  // ) as IRatioOfChannelsWithBaseFeatured

  // UseEffect(() => {
  // 	Const activeOptions = activeWeapon?.options?.map((elem: IKitOption) => elem._id)
  // 	Const matchedBase = forSetupComparison.find(
  // 		(elem: IForSetupComparison) => elem._id === activeWeapon.baseId
  // 	) as IForSetupComparison
  // 	Const matchedBasesAmount = matchedBase?.matches.length
  // 	Let matchedAttachmentsCount = 0

  // 	Const containsAll = (arr1: string[], arr2: string[]) => arr2.every((arr2Item) => arr1.includes(arr2Item))

  // 	MatchedBase?.matches.forEach((elem) => {
  // 		If (elem.length === activeOptions.length && containsAll(elem, activeOptions)) {
  // 			MatchedAttachmentsCount = matchedAttachmentsCount + 1
  // 		}
  // 	})

  // 	SetSetupsWithSameAttachmentsRatio(matchedAttachmentsCount / matchedBasesAmount)

  // 	// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [activeWeapon])

  return (
    <Styled.Container data-cy="kit-popularity">
      <Styled.Header>POPULARITY</Styled.Header>
      <Styled.Header style={{ margin: '1rem 0', fontSize: '1rem' }}>
        Under Construction
      </Styled.Header>
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
  );
}

export default Popularity;
