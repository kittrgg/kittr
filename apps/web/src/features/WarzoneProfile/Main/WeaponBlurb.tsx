import * as Styled from "./style"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"

const BottomBlurb = ({ ...props }) => {
	const activeWeapon = useActiveWeapon()
	const blurb = activeWeapon.kitBase.blurb

	return (
		<Styled.Container data-cy="kit-blurb">
			<Styled.Header style={{ marginBottom: "24px" }}>BLURB</Styled.Header>
			{blurb}
		</Styled.Container>
	)
}

export default BottomBlurb
