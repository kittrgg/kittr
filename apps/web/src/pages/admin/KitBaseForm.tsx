import { WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"
import { Button, List, NumberInput, Section, Text, Textarea, TextInput, Title } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { useState } from "react"
import styled from "styled-components"
import { KitBaseOptionForm } from "./KitBaseOptionForm"
import { trpc } from "@Server/createHooks"

const Container = styled.div`
	margin-bottom: 0.5rem;
`

interface Props {
	base: WarzoneKitBase & {
		availableOptions: WarzoneKitOption[]
	}
	onFinished: () => void
}

export const KitBaseForm = ({ base, onFinished }: Props) => {
	const [formValues, setFormValues] = useState(base)
	const [isEditingOption, setIsEditingOption] = useState<WarzoneKitOption | null>(null)
const {mutate: updateBase} = trpc.useMutation("admin/warzone/kit-bases/update")
const {mutate: deleteBase} = trpc.useMutation("admin/warzone/kit-bases/delete")

	const changeTextField = (key: keyof typeof base) => (e: any) => {
		console.log(e.target.value)
		setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }))
	}

	const changeNumberField = (key: keyof typeof base) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }))
	}

	return (
		<div style={{ margin: "1rem" }}>
			<Section
				title="Editing Kit Base"
				action={
					<>
						<Text color="gray">Base ID: {base.id}</Text>
						<Text color="gray">Game ID: {base.gameId}</Text>
						<Text color="gray">Category ID: {base.categoryId}</Text>
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
				<div>
					<Button variant="outline" onClick={ onFinished } style={{ margin: "1rem 1rem 1rem 0rem" }}>
						Cancel
					</Button>
					<Button variant="filled" onClick={() => updateBase({base: formValues})}>Save</Button>
					<Button variant="filled" color="red" onClick={() => deleteBase({kitBaseId: formValues.id})}>Delete</Button>
				</div>

				{isEditingOption ? (
					<KitBaseOptionForm option={isEditingOption} onFinished={() => setIsEditingOption(null)} />
				) : (
					<>
						<Title order={2} preset="h3" style={{ marginTop: "3rem" }}>
							Available Options
						</Title>

						<List>
							{base.availableOptions?.map((option) => (
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
					</>
				)}
			</Section>
		</div>
	)
}
