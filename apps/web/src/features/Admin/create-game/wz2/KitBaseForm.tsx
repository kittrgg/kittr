import type { WarzoneTwoKitBase, WarzoneTwoKitOption } from "@kittr/prisma"
import { Button, List, NumberInput, Section, Select, SubSection, Text, Textarea, TextInput, SVG } from "@kittr/ui"
import { ActionIcon } from "@mantine/core"
import { useState } from "react"
import styled from "styled-components"
import { KitBaseOptionForm } from "./KitBaseOptionForm"
import { trpc } from "@/lib/trpc"

const groupBy = (xs: any, key: string) =>
	xs.reduce((rv: any, x: any) => {
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

export function KitBaseForm({ kitBaseId, gameId, onFinished }: Props) {
	const [formValues, setFormValues] = useState<Partial<FormState>>({ gameId })

	const { refetch } = trpc.admin.warzone2.kitBases.get.useQuery(
		{ kitBaseId: kitBaseId! },
		{
			enabled: Boolean(kitBaseId),
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

	const changeTextField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }))
	}

	const changeNumberField = (key: keyof FormState) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }))
	}

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
				action={
					<>
						{formValues.id ? <Text color="gray">Base ID: {formValues.id}</Text> : null}
						{formValues.gameId ? <Text color="gray">Game ID: {formValues.gameId}</Text> : null}
					</>
				}
				title={kitBaseId ? "Editing Kit Base" : "Creating Kit Base"}
			>
				<Container>
					<TextInput
						label="Display Name"
						onChange={changeTextField("displayName")}
						placeholder="Display Name"
						value={formValues.displayName}
					/>
				</Container>

				<Container>
					<Select
						data={(kitBaseCategories || []).map((category) => ({
							value: category.id,
							label: category.displayName
						}))}
						label="Category"
						onChange={changeSelectField("categoryId")}
						placeholder="Category"
						value={formValues.categoryId}
					/>
				</Container>

				<Container>
					<TextInput
						label="Image URL"
						onChange={changeTextField("imageUrl")}
						placeholder="Image URL"
						value={formValues.imageUrl}
					/>
				</Container>

				<Container>
					<Textarea label="Blurb" onChange={changeTextField("blurb")} placeholder="Blurb" value={formValues.blurb} />
				</Container>

				<Container>
					<NumberInput
						label="Max Options"
						onChange={changeNumberField("maxOptions")}
						placeholder="Max Options"
						type="number"
						value={formValues.maxOptions}
					/>
				</Container>

				<TextInput
					description="Comma separated list of command codes. Will be coerced to array of values for DB for you."
					label="Command Codes"
					onChange={changeTextField("commandCodes")}
					value={formValues.commandCodes}
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
						{formValues.id
							? Object.entries<WarzoneTwoKitOption[]>(getOptions()).map(([slotKey, options]) => (
									<SubSection
										action={
											<Button
												onClick={() =>
													setIsCreatingOption({
														slotKey,
														kitBaseId: formValues.id,
														gameId: formValues.gameId
													})
												}
											>
												Add {slotKey}
											</Button>
										}
										key={slotKey}
										title={slotKey}
									>
										<List>
											{options
												.sort((a, b) => Number(a.orderPlacement) - Number(b.orderPlacement))
												.map((option) => (
													<List.Item
														key={option.id}
														style={{
															borderBottom: "1px solid white",
															padding: "1rem"
														}}
														sx={(theme) => ({
															"&:hover": {
																backgroundColor: theme.colors.gray[8]
															}
														})}
													>
														{option.displayName}
														<ActionIcon
															onClick={() => setIsEditingOption(option)}
															radius="lg"
															size="lg"
															style={{ float: "right" }}
														>
															<SVG.Pencil />
														</ActionIcon>
													</List.Item>
												))}
										</List>
									</SubSection>
							  ))
							: null}
					</>
				)}

				<div>
					<Button onClick={onFinished} style={{ margin: "1rem 1rem 1rem 0rem" }} variant="outline">
						Cancel
					</Button>
					<Button
						onClick={() => {
							if (formValues.id) {
								updateBase(
									{
										base: formValues as FormState,
										commandCodes: formValues.commandCodes ?? null
									},
									{
										onSuccess: onFinished
									}
								)
							} else {
								createBase(
									{
										base: formValues as FormState,
										commandCodes: formValues.commandCodes || ""
									},
									{
										onSuccess: onFinished
									}
								)
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
									onSuccess: onFinished
								}
							)
						}
						style={{ margin: "1rem 0rem 0rem 0rem", float: "right" }}
						variant="filled"
					>
						Delete
					</Button>
				</div>
			</Section>
		</div>
	)
}
