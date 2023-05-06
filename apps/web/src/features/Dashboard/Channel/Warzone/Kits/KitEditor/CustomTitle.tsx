import colors from "@Colors"
import TextInput from "@Components/shared/TextInput"
import { updateCustomTitle } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import validator from "validator"
import * as Styled from "./style"

function CustomTitle({ ...props }) {
	const dispatch = useDispatch()
	const { base, customTitle } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>DESCRIPTION</Styled.Header>
				<Styled.HeaderHelper>(Optional - Limit 20 characters)</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.ParagraphHelper>This text will be displayed next to your weapon's default name.</Styled.ParagraphHelper>
			<TextInput
				inputStyles={{ width: "50%", minWidth: "390px", marginLeft: "0", marginTop: "12px" }}
				label={`${base.displayName ? base.displayName : ""} (`}
				labelStyles={{ color: colors.lighter, marginTop: "12px" }}
				name="customTitle"
				onChange={(e) => {
					if (e.target.value.length === 0) return dispatch(updateCustomTitle(""))
					if (e.target.value.length > 20 || !validator.matches(e.target.value, /^[a-z0-9 ]+$/i)) {
						dispatch(updateCustomTitle(customTitle ?? ""))
					} else {
						dispatch(updateCustomTitle(e.target.value))
					}
				}}
				type="text"
				value={customTitle ?? ""}
			/>
			<Styled.ClosingParenthesis style={{ color: colors.lighter }}>)</Styled.ClosingParenthesis>
		</Styled.Container>
	)
}

export default CustomTitle
