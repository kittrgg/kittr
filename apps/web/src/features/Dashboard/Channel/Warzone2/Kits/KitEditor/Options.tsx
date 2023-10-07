import colors from '@Colors';
import { Selector } from '@Components/shared';
import { useOptionsByKitBase } from '@Hooks/api/useOptionsbyKitBase';
import { useIsMounted } from '@Hooks/useIsMounted';
import { updateOptions, updateTunes } from '@Redux/slices/dashboard';
import {
	useActiveKit,
	useChannelView,
} from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { getArrayUniques } from '@Utils/helpers/getArrayUniques';
import { warzoneSlotsOrder } from '@Utils/lookups/warzoneSlotsOrder';
import type {
	WarzoneKitOption,
	WarzoneTwoKitOption,
	WarzoneTwoKitOptionTuning,
} from '@kittr/prisma';
import { Loader, NumberInput } from '@kittr/ui';
import { Grid } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import * as Styled from './style';

const animationDuration = 1000;

export const handleHorzTuneName = (slotName: string) => {
	switch (slotName) {
		case 'Optic':
			return 'Eye Position';
		case 'Ammunition':
			return 'Load';
		case 'Rear Grip':
			return 'Width';
		case 'Comb':
			return 'Thickness';
		default:
			return 'Length';
	}
};

function Options() {
	const dispatch = useDispatch();
	const { base, options: current, tuning } = useActiveKit();
	const isMounted = useIsMounted();
	const { data: availableOptions, isLoading } = useOptionsByKitBase(base.id);
	const [animationTrigger, setAnimationTrigger] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (isMounted()) {
				setAnimationTrigger(false);
			}
		}, animationDuration);
	}, [animationTrigger, isMounted]);

	const slots =
		availableOptions &&
		getArrayUniques(availableOptions, 'slotKey').sort(
			(a: string, b: string) =>
				warzoneSlotsOrder.indexOf(a) - warzoneSlotsOrder.indexOf(b),
		);

	const addToOptions = (inputValue: string, slot: string) => {
		const newCurrent: WarzoneTwoKitOption[] = current.slice();

		if (inputValue === '') {
			const index = newCurrent.findIndex((elem) => elem.slotKey === slot);
			newCurrent.splice(index, 1);
			return dispatch(updateOptions(newCurrent));
		}

		const toAdd = availableOptions?.find(
			(opt) => opt.displayName === inputValue && opt.slotKey === slot,
		);

		const index = newCurrent.findIndex(
			(elem) => elem.slotKey === toAdd?.slotKey,
		);

		if (!toAdd) return;

		if (index > -1) {
			newCurrent[index] = toAdd;
		} else {
			newCurrent.push(toAdd);
		}

		const copyTunes = Array.from(newCurrent, (option) => ({
			// Id: tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]?.id ?? "",
			id: tuning.find((tune) => tune.kitOptionId === option.id)?.id ?? '',
			kitId: option.kitBaseId,
			kitOptionId: option.id,
			horz: tuning.find((tune) => tune.kitOptionId === option.id)?.horz ?? 0,
			vert: tuning.find((tune) => tune.kitOptionId === option.id)?.vert ?? 0,
			// Horz: tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]?.horz ?? 0,
			// Vert: tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]?.vert ?? 0
		}));
		dispatch(updateTunes(copyTunes));

		if (newCurrent.length > base.maxOptions) return setAnimationTrigger(true);
		return dispatch(updateOptions(newCurrent));
	};

	const addToTunes = (
		inputValue: number | '',
		slot: string,
		activeTune?: 'horz' | 'vert',
	) => {
		const newCurrent: WarzoneKitOption[] | WarzoneTwoKitOption[] =
			current.slice();

		if (tuning.length === 0) {
			const copyTunes = Array.from(newCurrent, (option) => ({
				id:
					tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]
						?.id ?? '',
				kitId: option.kitBaseId,
				kitOptionId: option.id,
				horz:
					tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]
						?.horz ?? 0,
				vert:
					tuning[tuning.findIndex((tune) => tune.kitOptionId === option.id)]
						?.vert ?? 0,
			}));
			dispatch(updateTunes(copyTunes));
		}
		// If tune is being edited and tuning length is same as current options length
		if (activeTune && tuning.length === newCurrent.length) {
			// Copy tuning array
			const copyTunes: Omit<WarzoneTwoKitOptionTuning, 'id'>[] = [...tuning];

			// Copy tune object to mutate
			const copyTune = {
				...copyTunes.find(
					(tune) =>
						tune.kitOptionId ===
						newCurrent.find((option) => option.slotKey === slot)?.id,
				),
				kitOptionId: newCurrent.find((option) => option.slotKey === slot)?.id,
				kitId: newCurrent.find((option) => option.slotKey === slot)?.kitBaseId,
			} as Omit<WarzoneTwoKitOptionTuning, 'id'>;

			// Set correct tune to inputValue
			copyTune[activeTune] = inputValue as number;

			// Mutate the correctly indexed tune in tuning array
			copyTunes[
				copyTunes.findIndex(
					(tune) =>
						tune.kitOptionId ===
						newCurrent.find((opt) => opt.slotKey === slot)?.id,
				)
			] = copyTune;

			return dispatch(updateTunes(copyTunes));
		}
	};

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>ATTACHMENTS</Styled.Header>
				<Styled.HeaderHelper
					animate={animationTrigger}
					animationDuration={animationDuration}
				>
					(Limit {base.maxOptions})
				</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.AttachmentsFlex>
				{isLoading ? <Loader /> : null}
				{!isLoading && availableOptions
					? slots?.map((slot: string) => {
							return (
								<div
									key={slot}
									style={{ marginBottom: '18px', flexBasis: '40%' }}
								>
									<Styled.Header>{slot}</Styled.Header>
									<Selector
										className={`${slot.replace(/ /g, '-')}-selector`}
										isSearchable={false}
										onChange={(e: any) => addToOptions(e.value, slot)}
										options={[
											{
												label: '-',
												value: '',
											},
											...availableOptions
												.filter((opt) => opt.slotKey === slot)
												.sort(
													(a, b) =>
														Number(a.orderPlacement) - Number(b.orderPlacement),
												)
												.map((option) => ({
													label: option.displayName,
													value: option.displayName,
												})),
										]}
										value={{
											label: current.find((opt) => opt.slotKey === slot)
												? current.find((opt) => opt.slotKey === slot)
														?.displayName
												: '-',
										}}
									/>

									{current.find((opt) => opt.slotKey === slot)?.displayName ? (
										<Grid>
											<Grid.Col span={6}>
												<NumberInput
													label={handleHorzTuneName(slot)}
													onChange={(e) => addToTunes(e, slot, 'horz')}
													precision={2}
													radius="md"
													size="sm"
													step={0.1}
													sx={{ input: { background: colors.light } }}
													value={
														tuning.find(
															(tune) =>
																tune.kitOptionId ===
																current.find((opt) => opt.slotKey === slot)?.id,
														)?.horz ?? 0
													}
												/>
											</Grid.Col>
											<Grid.Col span={6}>
												<NumberInput
													label="Weight"
													onChange={(e) => addToTunes(e, slot, 'vert')}
													precision={2}
													radius="md"
													size="sm"
													step={0.1}
													sx={{ input: { background: colors.light } }}
													value={
														tuning.find(
															(tune) =>
																tune.kitOptionId ===
																current.find((opt) => opt.slotKey === slot)?.id,
														)?.vert ?? 0
													}
												/>
											</Grid.Col>
										</Grid>
									) : null}
								</div>
							);
					  })
					: null}
			</Styled.AttachmentsFlex>
		</Styled.Container>
	);
}

export default Options;
