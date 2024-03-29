import type { WarzoneKitBase, WarzoneKitOption } from '@kittr/prisma';
import {
	Button,
	List,
	NumberInput,
	Section,
	Select,
	SubSection,
	Text,
	Textarea,
	TextInput,
	SVG,
} from '@kittr/ui';
import { ActionIcon } from '@mantine/core';
import { useState } from 'react';
import styled from 'styled-components';
import { KitBaseOptionForm } from './KitBaseOptionForm';
import { trpc } from '@/lib/trpc';

const groupBy = (xs: any, key: string) =>
	xs.reduce((rv: any, x: any) => {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});

const Container = styled.div`
  margin-bottom: 0.5rem;
`;

type FormState = WarzoneKitBase & {
	availableOptions: WarzoneKitOption[];
};

interface Props {
	kitBaseId?: string;
	gameId: string;
	onFinished: () => void;
}

export function KitBaseForm({ kitBaseId, gameId, onFinished }: Props) {
	const [formValues, setFormValues] = useState<Partial<FormState>>({ gameId });

	const { refetch } = trpc.admin.warzone.kitBases.get.useQuery(
		{ kitBaseId: kitBaseId! },
		{
			enabled: Boolean(kitBaseId),
			onSuccess: (data) => {
				setFormValues(data || {});
			},
			refetchOnMount: true,
		},
	);
	const { data: kitBaseCategories } = trpc.kits.bases.list.useQuery({
		category: true,
	});

	const [isEditingOption, setIsEditingOption] =
		useState<WarzoneKitOption | null>(null);
	const [isCreatingOption, setIsCreatingOption] = useState<{
		slotKey: string;
		kitBaseId?: string;
		gameId?: string;
	} | null>(null);
	const { mutate: updateBase } =
		trpc.admin.warzone.kitBases.update.useMutation();
	const { mutate: createBase } =
		trpc.admin.warzone.kitBases.create.useMutation();
	const { mutate: deleteBase } =
		trpc.admin.warzone.kitBases.delete.useMutation();

	const changeTextField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }));
	};

	const changeNumberField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }));
	};

	const changeSelectField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }));
	};

	const getOptions = () => {
		const groupedOptions = groupBy(
			formValues.availableOptions || [],
			'slotKey',
		);

		return {
			Cable: [],
			Muzzle: [],
			Arms: [],
			Barrel: [],
			Laser: [],
			Guard: [],
			Optic: [],
			Stock: [],
			Underbarrel: [],
			'Trigger Action': [],
			'Bolt Assembly': [],
			Bolt: [],
			Magazine: [],
			Ammunition: [],
			'Ammo Type': [],

			'Rear Grip': [],
			'Pump Grip': [],
			Perk: [],
			Pumps: [],
			'Perk 1': [],
			'Perk 2': [],
			...groupedOptions,
		};
	};

	return (
		<div style={{ margin: '1rem' }}>
			<Section
				action={
					<>
						{formValues.id ? (
							<Text color="gray">Base ID: {formValues.id}</Text>
						) : null}
						{formValues.gameId ? (
							<Text color="gray">Game ID: {formValues.gameId}</Text>
						) : null}
					</>
				}
				title={kitBaseId ? 'Editing Kit Base' : 'Creating Kit Base'}
			>
				<Container>
					<TextInput
						label="Display Name"
						onChange={changeTextField('displayName')}
						placeholder="Display Name"
						value={formValues.displayName}
					/>
				</Container>

				<Container>
					<Select
						data={(kitBaseCategories || []).map((category) => ({
							value: category.id,
							label: category.displayName,
						}))}
						label="Category"
						onChange={changeSelectField('categoryId')}
						placeholder="Category"
						value={formValues.categoryId}
					/>
				</Container>

				<Container>
					<TextInput
						label="Image URL"
						onChange={changeTextField('imageUrl')}
						placeholder="Image URL"
						value={formValues.imageUrl}
					/>
				</Container>

				<Container>
					<Textarea
						label="Blurb"
						onChange={changeTextField('blurb')}
						placeholder="Blurb"
						value={formValues.blurb}
					/>
				</Container>

				<Container>
					<NumberInput
						label="Max Options"
						onChange={changeNumberField('maxOptions')}
						placeholder="Max Options"
						type="number"
						value={formValues.maxOptions}
					/>
				</Container>

				{isCreatingOption ? (
					<KitBaseOptionForm
						initialValues={isCreatingOption}
						onFinished={() => {
							setIsCreatingOption(null);
							refetch();
						}}
					/>
				) : isEditingOption ? (
					<KitBaseOptionForm
						initialValues={isEditingOption}
						onFinished={() => {
							setIsEditingOption(null);
							refetch();
						}}
					/>
				) : (
					<>
						{/* Using formValues.id here to know if we are editing the kit base */}
						{formValues.id
							? Object.entries<WarzoneKitOption[]>(getOptions()).map(
									([slotKey, options]) => (
										<SubSection
											action={
												<Button
													onClick={() =>
														setIsCreatingOption({
															slotKey,
															kitBaseId: formValues.id,
															gameId: formValues.gameId,
														})
													}
												>
													Add {slotKey}
												</Button>
											}
											title={slotKey}
										>
											<List>
												{options.map((option) => (
													<List.Item
														style={{
															borderBottom: '1px solid white',
															padding: '1rem',
														}}
														sx={(theme) => ({
															'&:hover': {
																backgroundColor: theme.colors.gray[8],
															},
														})}
													>
														{option.displayName}
														<ActionIcon
															onClick={() => setIsEditingOption(option)}
															radius="lg"
															size="lg"
															style={{ float: 'right' }}
														>
															<SVG.Pencil />
														</ActionIcon>
													</List.Item>
												))}
											</List>
										</SubSection>
									),
							  )
							: null}
					</>
				)}

				<div>
					<Button
						onClick={onFinished}
						style={{ margin: '1rem 1rem 1rem 0rem' }}
						variant="outline"
					>
						Cancel
					</Button>
					<Button
						onClick={() => {
							if (formValues.id) {
								updateBase(
									{ base: formValues as FormState },
									{
										onSuccess: onFinished,
									},
								);
							} else {
								createBase(
									{ base: formValues as FormState, commandCodes: [] },
									{
										onSuccess: onFinished,
									},
								);
							}
						}}
						variant="filled"
					>
						Save
					</Button>
					<Button
						color="red"
						onClick={() =>
							deleteBase(
								{ kitBaseId: formValues.id! },
								{
									onSuccess: onFinished,
								},
							)
						}
						style={{ margin: '1rem 0rem 0rem 0rem', float: 'right' }}
						variant="filled"
					>
						Delete
					</Button>
				</div>
			</Section>
		</div>
	);
}
