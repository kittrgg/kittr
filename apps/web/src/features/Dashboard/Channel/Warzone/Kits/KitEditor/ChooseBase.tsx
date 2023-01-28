import * as Styled from "./style"
import { trpc } from "@/lib/trpc"
import { Selector } from "@Components/shared"
import { updateBase, updateOptions } from "@Redux/slices/dashboard"
import { useActiveKit, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"

const ChooseBase = () => {
	const { view } = useChannelView()
	const dispatch = useDispatch()
	const { base } = useActiveKit()

	const { data, isLoading } = trpc.kits.bases.listByGameUrlSafeName.useQuery({ gameUrlSafeName: view })

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
						?.sort((a, b) => {
							return sortAlphabetical(a.displayName.toLowerCase(), b.displayName.toLowerCase())
						})
						.map((option) => ({
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
