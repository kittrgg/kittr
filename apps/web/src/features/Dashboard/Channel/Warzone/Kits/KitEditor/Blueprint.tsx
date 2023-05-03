import TextInput from "@Components/shared/TextInput"
import { updateBlueprint } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import * as Styled from "./style"

function Blueprint({ ...props }) {
	const dispatch = useDispatch()
	const { blueprint } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.Header>FAVORITE BLUEPRINT</Styled.Header>
			<TextInput
				inputStyles={{ marginTop: "12px" }}
				label="Favorite Blueprint"
				name="blueprint"
				noTextLabel
				onChange={(e) => dispatch(updateBlueprint(e.target.value))}
				type="text"
				value={blueprint ?? ""}
			/>
		</Styled.Container>
	)
}

export default Blueprint
