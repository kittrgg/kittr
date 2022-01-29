import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import { SingleValue } from "react-select"

import * as Styled from "./style"
import { useDispatch } from "@Redux/store"
import { useAllKitsByGameId } from "@Hooks/api/useAllKitsByGameId"
import { updateBase, updateOptions } from "@Redux/slices/dashboard"
import { useActiveKit, useChannelView } from "@Redux/slices/dashboard/selectors"
import { Selector } from "@Components/shared"

const ChooseBase = ({ ...props }) => {
	const { gameId } = useChannelView()
	const { data, isLoading } = useAllKitsByGameId(gameId)
	const dispatch = useDispatch()
	const { base } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>CHOOSE WEAPON</Styled.Header>
				<Selector
					className="choose-kit-base"
					isLoading={isLoading}
					isSearchable={true}
					placeholder="Choose a Base"
					value={
						Object.keys(base).length > 0
							? {
									label: base.displayName,
									value: base
							  }
							: null
					}
					options={data
						?.sort((a: IKitBase, b: IKitBase) => {
							return sortAlphabetical(a.displayName.toLowerCase(), b.displayName.toLowerCase())
						})
						.map((option: IKitBase) => ({
							label: option.displayName,
							value: option
						}))}
					onChange={(e: any) => {
						if (e) {
							dispatch(updateBase(e.value))
							dispatch(updateOptions([]))
						}
					}}
				/>
			</Styled.HorizFlex>
		</Styled.Container>
	)
}

export default ChooseBase
