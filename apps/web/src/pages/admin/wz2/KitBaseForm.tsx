/* eslint-disable */
import { KitBaseOptionForm } from "./KitBaseOptionForm"
import { trpc } from "@Server/createTRPCNext"
import { WarzoneTwoKitBase, WarzoneTwoKitOption } from "@kittr/prisma"
import { Button, List, NumberInput, Section, Select, SubSection, Text, Textarea, TextInput } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { useState } from "react"
import styled from "styled-components"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const groupBy = (xs: any, key: string) =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	xs.reduce((rv: any, x: any) => {
		// eslint-disable-next-line @typescript-eslint/no-extra-semi
		;(rv[x[key]] = rv[x[key]] || []).push(x)
		return rv
	}, {})

const Container = styled.div`
	margin-bottom: 0.5rem;
`

type FormState = WarzoneTwoKitBase & {
	availableOptions: WarzoneTwoKitOption[]
	commandCodes: string
}

interface Props {
	kitBaseId?: string
	gameId: string
	onFinished: () => void
}

export const KitBaseForm = ({ kitBaseId, gameId, onFinished }: Props) => {
	const [formValues, setFormValues] = useState<Partial<FormState>>({ gameId })

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { refetch } = trpc.admin.warzone2.kitBases.get.useQuery(
		{ kitBaseId: kitBaseId! },
		{
			enabled: !!kitBaseId,
			onSuccess: (data) => {
				setFormValues(data || {})
			},
			refetchOnMount: true
		}
	)
	const { data: kitBaseCategories } = trpc.admin.warzone2.kitBases.categories.useQuery()

	const [isEditingOption, setIsEditingOption] = useState<WarzoneTwoKitOption | null>(null)
	const [isCreatingOption, setIsCreatingOption] = useState<{
		slotKey: string
		kitBaseId?: string
		gameId?: string
	} | null>(null)
	const { mutate: updateBase } = trpc.admin.warzone2.kitBases.update.useMutation()
	const { mutate: createBase } = trpc.admin.warzone2.kitBases.create.useMutation()
	const { mutate: deleteBase } = trpc.admin.warzone2.kitBases.delete.useMutation()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const changeTextField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }))
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const changeNumberField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }))
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const changeSelectField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }))
	}

	const getOptions = () => {
		const groupedOptions = groupBy(formValues.availableOptions || [], "slotKey")

		return {
			"Cable": [],
			"Muzzle": [],
			"Arms": [],
			"Barrel": [],
			"Laser": [],
			"Guard": [],
			"Optic": [],
			"Stock": [],
			"Underbarrel": [],
			"Trigger Action": [],
			"Bolt Assembly": [],
			"Bolt": [],
			"Magazine": [],
			"Rail": [],
			"Ammunition": [],
			"Ammo Type": [],
			"Loader": [],
			"Rear Grip": [],
			"Lever": [],
			"Comb": [],
			"Rear Grip/Comb": [],
			"Pump Grip": [],
			"Perk": [],
			"Pumps": [],
			"Perk 1": [],
			"Perk 2": [],
			...groupedOptions
		}
	}

	return (
		<div style={{ margin: "1rem" }}>
			<Section
				title={kitBaseId ? "Editing Kit Base" : "Creating Kit Base"}
				action={
					<>
						{formValues.id && <Text color="gray">Base ID: {formValues.id}</Text>}
						{formValues.gameId && <Text color="gray">Game ID: {formValues.gameId}</Text>}
					</>
				}
			>
				<Container>
					<TextInput
						label="Display Name"
						placeholder="Display Name"
						value={formValues.displayName}
						onChange={changeTextField("displayName")}
					/>
				</Container>

				<Container>
					<Select
						data={(kitBaseCategories || []).map((category) => ({ value: category.id, label: category.displayName }))}
						label="Category"
						placeholder="Category"
						value={formValues.categoryId}
						onChange={changeSelectField("categoryId")}
					/>
				</Container>

				<Container>
					<TextInput
						label="Image URL"
						placeholder="Image URL"
						value={formValues.imageUrl}
						onChange={changeTextField("imageUrl")}
					/>
				</Container>

				<Container>
					<Textarea label="Blurb" placeholder="Blurb" value={formValues.blurb} onChange={changeTextField("blurb")} />
				</Container>

				<Container>
					<NumberInput
						label="Max Options"
						placeholder="Max Options"
						type="number"
						value={formValues.maxOptions}
						onChange={changeNumberField("maxOptions")}
					/>
				</Container>

				<TextInput
					label="Command Codes"
					description="Comma separated list of command codes. Will be coerced to array of values for DB for you."
					value={formValues.commandCodes}
					onChange={changeTextField("commandCodes")}
				/>

				{isCreatingOption ? (
					<KitBaseOptionForm
						initialValues={isCreatingOption}
						onFinished={() => {
							setIsCreatingOption(null)
							refetch()
						}}
					/>
				) : isEditingOption ? (
					<KitBaseOptionForm
						initialValues={isEditingOption}
						onFinished={() => {
							setIsEditingOption(null)
							refetch()
						}}
					/>
				) : (
					<>
						{/* Using formValues.id here to know if we are editing the kit base */}
						{formValues.id &&
							Object.entries<WarzoneTwoKitOption[]>(getOptions()).map(([slotKey, options]) => (
								<SubSection
									key={slotKey}
									title={slotKey}
									action={
										<Button
											onClick={() =>
												setIsCreatingOption({ slotKey, kitBaseId: formValues?.id, gameId: formValues?.gameId })
											}
										>
											Add {slotKey}
										</Button>
									}
								>
									<List>
										{options
											?.sort((a, b) => Number(a.orderPlacement) - Number(b.orderPlacement))
											.map((option) => (
												<List.Item
													key={option.id}
													style={{ borderBottom: "1px solid white", padding: "1rem" }}
													sx={(theme) => ({
														"&:hover": {
															backgroundColor: theme.colors.gray[8]
														}
													})}
												>
													{option.displayName}
													<ActionIcon
														radius="lg"
														size="lg"
														style={{ float: "right" }}
														onClick={() => setIsEditingOption(option)}
													>
														<SVG.Pencil />
													</ActionIcon>
												</List.Item>
											))}
									</List>
								</SubSection>
							))}
					</>
				)}

				<div>
					<Button variant="outline" onClick={onFinished} style={{ margin: "1rem 1rem 1rem 0rem" }}>
						Cancel
					</Button>
					<Button
						variant="filled"
						onClick={() => {
							if (formValues.id) {
								updateBase(
									{ base: formValues as FormState, commandCodes: formValues.commandCodes ?? null },
									{
										onSuccess: onFinished
									}
								)
							} else {
								createBase(
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									{ base: formValues as FormState, commandCodes: formValues.commandCodes },
									{
										onSuccess: onFinished
									}
								)
							}
						}}
					>
						Save
					</Button>
					<Button
						variant="filled"
						color="red"
						onClick={() =>
							deleteBase(
								{ kitBaseId: formValues.id as string },
								{
									onSuccess: onFinished
								}
							)
						}
						style={{ margin: "1rem 0rem 0rem 0rem", float: "right" }}
					>
						Delete
					</Button>
				</div>
			</Section>
		</div>
	)
}
