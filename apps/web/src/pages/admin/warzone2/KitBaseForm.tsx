/* eslint-disable max-len */
import { Warzone2KitBase, Warzone2KitOption } from "@kittr/prisma"
import { Button, List, NumberInput, Section, Select, SubSection, Text, Textarea, TextInput } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { trpc } from "@Server/createHooks"
import { useState } from "react"
import styled from "styled-components"
import { KitBaseOptionForm } from "./KitBaseOptionForm"

const groupBy = (xs: any, key: string) => xs.reduce((rv: any, x: any) => {
		;(rv[x[key]] = rv[x[key]] || []).push(x)
		return rv
	}, {})

const Container = styled.div`
	margin-bottom: 0.5rem;
`

type FormState = Warzone2KitBase & {
	availableOptions: Warzone2KitOption[]
}

interface Props {
	kitBaseId?: string
	gameId: string
	onFinished: () => void
}

export const KitBaseForm = ({ kitBaseId, gameId, onFinished }: Props) => {
	const [formValues, setFormValues] = useState<Partial<FormState>>({ gameId })

	const { refetch } = trpc.useQuery(["admin/warzone2/kit-bases/get", { kitBaseId: kitBaseId! }], {
		enabled: !!kitBaseId,
		onSuccess: (data) => {
			setFormValues(data || {})
		},
		refetchOnMount: true
	})
	const { data: kitBaseCategories } = trpc.useQuery(["admin/warzone2/kit-bases/categories/list"])

	const [isEditingOption, setIsEditingOption] = useState<Warzone2KitOption | null>(null)
	const [isCreatingOption, setIsCreatingOption] = useState<{
		slotKey: string
		kitBaseId?: string
		gameId?: string
	} | null>(null)
	const { mutate: updateBase } = trpc.useMutation("admin/warzone2/kit-bases/update")
	const { mutate: createBase } = trpc.useMutation("admin/warzone2/kit-bases/create")
	const { mutate: deleteBase } = trpc.useMutation("admin/warzone2/kit-bases/delete")

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
			"Ammunition": [],
			"Ammo Type": [],
			"Rear Grip": [],
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
							Object.entries<Warzone2KitOption[]>(getOptions()).map(([slotKey, options]) => (
								<SubSection
									title={slotKey}
									action={
										<Button
											onClick={() => setIsCreatingOption({ slotKey, kitBaseId: formValues?.id, gameId: formValues?.gameId })
											}
										>
											Add {slotKey}
										</Button>
									}
								>
									<List>
										{options?.map((option) => (
											<List.Item
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
									{ base: formValues as FormState },
									{
										onSuccess: onFinished
									}
								)
							} else {
								createBase(
									{ base: formValues as FormState, commandCodes: [] },
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
						onClick={() => deleteBase(
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

