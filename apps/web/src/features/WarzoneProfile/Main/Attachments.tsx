import colors from "@Colors"
import { handleHorzTuneName } from "@Features/Dashboard/Channel/Warzone2/Kits/KitEditor/Options"
import { useActiveChannelKit } from "@Hooks/useActiveChannelKit"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import type {
	WarzoneKit,
	WarzoneKitBase,
	WarzoneKitBaseCategory,
	WarzoneKitOption,
	WarzoneTwoKit,
	WarzoneTwoKitBase,
	WarzoneTwoKitBaseCategory,
	WarzoneTwoKitOption,
	WarzoneTwoKitOptionTuning
} from "@kittr/prisma"
import { Text } from "@kittr/ui"
import { Box, Grid } from "@mantine/core"
import { Fragment } from "react"
import styled from "styled-components"
import * as Styled from "./style"

type ActiveWeapon = (WarzoneKit | WarzoneTwoKit) & {
	base: (WarzoneKitBase | WarzoneTwoKitBase) & { category: WarzoneKitBaseCategory | WarzoneTwoKitBaseCategory }
	options: WarzoneKitOption[] | WarzoneTwoKitOption[]
	tuning?: WarzoneTwoKitOptionTuning[]
}

function Attachments() {
	const activeWeapon = useActiveChannelKit() as ActiveWeapon
	const options = activeWeapon.options
	const tunes = activeWeapon.tuning

	return (
		<Container
			data-cy="kit-options"
			numOfOptions={options !== undefined ? options.length : 0}
			numOfTunes={tunes !== undefined ? tunes.length : 0}
		>
			{options.length === 0 && <Styled.KitOptionLabel>No attachments assigned!</Styled.KitOptionLabel>}

			{options
				? customOrderArray<{ slotKey: string; displayName: string; id: string }>({
						sortingArray: warzoneSlotsOrder,
						keyToSort: "slotKey",
						array: options
				  }).map((slot) => {
						return (
							<Fragment key={slot.slotKey}>
								<Styled.KitOptionLabel>{slot.slotKey}</Styled.KitOptionLabel>
								<Styled.KitOption>{slot.displayName.toUpperCase()}</Styled.KitOption>

								{tunes !== undefined && (
									<Grid style={{ width: "80%", marginLeft: "4%" }}>
										{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)]?.horz ? (
											<Grid.Col span={6}>
												<Text>{handleHorzTuneName(slot.slotKey)}</Text>
												<Box sx={{ backgroundColor: "rgb(0,0,0,0.2)", padding: "0.5em", borderRadius: "10px" }}>
													{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)].horz}
												</Box>
											</Grid.Col>
										) : null}

										{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)]?.vert ? (
											<Grid.Col span={6}>
												<Text>Weight</Text>
												<Box sx={{ backgroundColor: "rgb(0,0,0,0.2)", padding: "0.5em", borderRadius: "10px" }}>
													{tunes[tunes.findIndex((tune) => tune.kitOptionId === slot.id)].vert}
												</Box>
											</Grid.Col>
										) : null}
									</Grid>
								)}
							</Fragment>
						)
				  })
				: null}
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
	// height: ${(props) => Math.max((props.numOfOptions + props.numOfTunes / 4) * 100, 80)}px;
	padding: 2em 8%;
	background: ${colors.lightest};
	border-radius: 25px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-around;
	// gap: 0.5em;

	@media (max-width: 650px) {
		// height: ${(props) => Math.max((props.numOfOptions + props.numOfTunes / 1.25) * 75, 80)}px;
	}
`
