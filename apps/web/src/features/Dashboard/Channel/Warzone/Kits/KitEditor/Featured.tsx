import colors from "@Colors"
import MultiButton from "@Components/shared/MultiButton"
import { updateFeatured } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import * as Styled from "./style"

function Featured({ ...props }) {
	const dispatch = useDispatch()
	const { featured } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>FEATURED</Styled.Header>
				<div style={{ flexBasis: "200px" }}>
					<MultiButton
						activeValue={featured ? "YUP" : "NOPE"}
						onClick={() => dispatch(updateFeatured(!featured))}
						values={[
							{
								text: "YUP",
								backgroundColor: colors.gold
							},
							{
								text: "NOPE"
							}
						]}
						wrapperBackgroundColor={colors.lightest}
					/>
				</div>
			</Styled.HorizFlex>
			<Styled.ParagraphHelper>
				If you select this option, this kit will be displayed at the top of your kits list.
			</Styled.ParagraphHelper>
		</Styled.Container>
	)
}

export default Featured
