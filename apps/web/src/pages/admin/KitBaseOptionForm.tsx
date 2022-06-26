import { WarzoneKitOption } from "@kittr/prisma"
import { Button, NumberInput, SubSection, Text, TextInput } from "@kittr/ui"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
	margin-bottom: 0.5rem;
`

interface Props {
	option: WarzoneKitOption
	onFinished: () => void
}

export const KitBaseOptionForm = ({ option, onFinished }: Props) => {
	const [formValues, setFormValues] = useState(option)

	const changeTextField = (key: keyof typeof option) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }))
	}

	const changeNumberField = (key: keyof typeof option) => (e: any) => {
		setFormValues((formValues) => ({ ...formValues, [key]: e }))
	}

	console.log(option)

	return (
		<SubSection
			title={`Editing Kit Base Option: ${option.displayName}`}
			action={
				<>
					<Text color="gray">Option ID: {option.id}</Text>
					<Text color="gray">Base ID: {option.kitBaseId}</Text>
					<Text color="gray">Game ID: {option.gameId}</Text>
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
				<NumberInput
					label="Order Placement"
					placeholder="Order Placement"
					type="number"
					value={formValues.orderPlacement}
					onChange={changeNumberField("orderPlacement")}
				/>
			</Container>

			<Container>
				<TextInput
					label="Slot Key"
					placeholder="Slot Key"
					value={formValues.slotKey}
					onChange={changeTextField("slotKey")}
				/>
			</Container>

			<div>
				<Button variant="outline" onClick={onFinished} style={{ margin: "1rem 1rem 0rem 0rem" }}>
					Cancel
				</Button>
				<Button variant="filled">Save</Button>
			</div>
		</SubSection>
	)
}
