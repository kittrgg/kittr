import * as Styled from "./style"
import TextInput from "@Components/shared/TextInput"
import { useDispatch } from "@Redux/store"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { updateBlueprint } from "@Redux/slices/dashboard"

const Blueprint = ({ ...props }) => {
	const dispatch = useDispatch()
	const { blueprint } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.Header>FAVORITE BLUEPRINT</Styled.Header>
			<TextInput
				type="text"
				name="blueprint"
				label="Favorite Blueprint"
				noTextLabel
				value={blueprint ?? ""}
				onChange={(e) => dispatch(updateBlueprint(e.target.value))}
				inputStyles={{ marginTop: "12px" }}
			/>
		</Styled.Container>
	)
}

export default Blueprint
