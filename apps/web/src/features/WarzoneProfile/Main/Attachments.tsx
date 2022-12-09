import * as Styled from "./style"
import colors from "@Colors"
import { handleHorzTuneName } from "@Features/Dashboard/Channel/Warzone2/Kits/KitEditor/Options"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors/useActiveWeapon"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { WarzoneTwoKitOption } from "@kittr/prisma"
import { TextInput } from "@kittr/ui"
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
					<div key={slot.slotKey} style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<Styled.KitOptionLabel>{slot.slotKey}</Styled.KitOptionLabel>
							<Styled.KitOption>{slot.displayName.toUpperCase()}</Styled.KitOption>
						</div>

						{(options.find((opt) => opt.slotKey === slot.slotKey)?.tuneHorz > 0 ||
							options.find((opt) => opt.slotKey === slot.slotKey)?.tuneVert > 0) && (
							<div style={{ width: "50%", display: "flex", gap: "20px" }}>
								<TextInput
									size="sm"
									disabled={true}
									// TODO: i don't have a clue how to handle this typescript
									value={(options.find((opt) => opt.slotKey === slot.slotKey) as WarzoneTwoKitOption)?.tuneHorz}
									label={handleHorzTuneName(slot.slotKey)}
									sx={{ input: { background: colors.light } }}
								/>
								<TextInput
									size="sm"
									disabled={true}
									// TODO: i don't have a clue how to handle this typescript
									value={(options.find((opt) => opt.slotKey === slot.slotKey) as WarzoneTwoKitOption)?.tuneVert}
									label="Weight"
									sx={{ input: { background: colors.light } }}
								/>
							</div>
						)}
					</div>
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
