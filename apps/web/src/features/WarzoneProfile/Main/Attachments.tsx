import * as Styled from "./style"
import colors from "@Colors"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors/useActiveWeapon"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { Fragment } from "react"
import styled from "styled-components"

const Attachments = () => {
	const activeWeapon = useActiveWeapon()
	const options = activeWeapon.options

	return (
		<Container data-cy="kit-options" numOfOptions={options.length}>
			{options.length === 0 && <Styled.KitOptionLabel>No attachments assigned!</Styled.KitOptionLabel>}

			{customOrderArray<{ slotKey: string; displayName: string }>({
				sortingArray: warzoneSlotsOrder,
				keyToSort: "slotKey",
				array: options
			}).map((slot) => {
				return (
					<Fragment key={slot.slotKey}>
						<Styled.KitOptionLabel>{slot.slotKey}</Styled.KitOptionLabel>
						<Styled.KitOption>{slot.displayName.toUpperCase()}</Styled.KitOption>
					</Fragment>
				)
			})}
		</Container>
	)
}

export default Attachments

// Styled Components

export const Container = styled.div<{ numOfOptions: number }>`
	justify-self: center;
	align-self: center;
	width: 100%;
	height: ${(props) => Math.max(props.numOfOptions * 100, 80)}px;
	padding: 3% 8%;
	background: ${colors.lightest};
	border-radius: 25px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-around;

	@media (max-width: 650px) {
		height: ${(props) => Math.max(props.numOfOptions * 75, 80)}px;
	}
`
