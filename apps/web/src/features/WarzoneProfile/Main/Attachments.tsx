import * as Styled from "./style"
import colors from "@Colors"
import { handleHorzTuneName } from "@Features/Dashboard/Channel/Warzone2/Kits/KitEditor/Options"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors/useActiveWeapon"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { Text } from "@kittr/ui"
import { Box, Grid } from "@mantine/core"
import { Fragment } from "react"
import styled from "styled-components"

const Attachments = () => {
	const activeWeapon = useActiveWeapon()
	const options = activeWeapon.options
	const tunes = activeWeapon.tuning

	return (
		<Container data-cy="kit-options" numOfOptions={options.length} numOfTunes={tunes !== undefined ? tunes.length : 0}>
			{options.length === 0 && <Styled.KitOptionLabel>No attachments assigned!</Styled.KitOptionLabel>}

			{customOrderArray<{ slotKey: string; displayName: string; id: string }>({
				sortingArray: warzoneSlotsOrder,
				keyToSort: "slotKey",
				array: options
			}).map((slot) => {
				return (
					<Fragment key={slot.slotKey}>
						<Styled.KitOptionLabel>{slot.slotKey}</Styled.KitOptionLabel>
						<Styled.KitOption>{slot.displayName.toUpperCase()}</Styled.KitOption>

						{tunes !== undefined && (
							<Grid style={{ width: "50%", marginLeft: "4%" }}>
								<Grid.Col span={6}>
									<Text>{handleHorzTuneName(slot.slotKey)}</Text>
									<Box sx={{ backgroundColor: "rgb(0,0,0,0.2)", padding: "0.5em", borderRadius: "10px" }}>
										{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)].horz}
									</Box>
								</Grid.Col>
								<Grid.Col span={6}>
									<Text>Weight</Text>
									<Box sx={{ backgroundColor: "rgb(0,0,0,0.2)", padding: "0.5em", borderRadius: "10px" }}>
										{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)].vert}
									</Box>
								</Grid.Col>
							</Grid>
						)}
					</Fragment>
				)
			})}
		</Container>
	)
}

export default Attachments

// Styled Components
// TODO: The height is the biggest pain point here. I did something quick but needs @anthonyshew review.

export const Container = styled.div<{ numOfOptions: number; numOfTunes: number }>`
	justify-self: center;
	align-self: center;
	width: 100%;
	height: ${(props) => Math.max((props.numOfOptions + props.numOfTunes / 2) * 100, 80)}px;
	padding: 3% 8%;
	background: ${colors.lightest};
	border-radius: 25px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: space-around;

	@media (max-width: 650px) {
		height: ${(props) => Math.max((props.numOfOptions + props.numOfTunes / 2) * 75, 80)}px;
	}
`
