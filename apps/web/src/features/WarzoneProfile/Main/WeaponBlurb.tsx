import * as Styled from "./style"
import { useActiveChannelKit } from "@Hooks/useActiveChannelKit"

const BottomBlurb = () => {
	const activeWeapon = useActiveChannelKit()
	const blurb = activeWeapon?.base?.blurb

	return (
		<Styled.Container data-cy="kit-blurb">
			<Styled.Header style={{ marginBottom: "24px" }}>BLURB</Styled.Header>
			{blurb}
		</Styled.Container>
	)
}

export default BottomBlurb
