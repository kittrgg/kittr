import { useState } from "react"
import {
	Title,
	Group,
	Container,
	MantineSize,
	Stepper,
	Alert,
	Chips,
	Chip,
	Pagination,
	Space,
	Button,
	DatePicker,
	DateRangePicker,
	Select,
	NumberInput,
	RadioGroup,
	Radio,
	RichTextEditor,
	SVG,
	Textarea,
	TextInput,
	TimeInput,
	Table
} from "ui"

const SELECT_DATA = [
	{ value: "rick", label: "Rick", group: "Used to be a pickle" },
	{ value: "morty", label: "Morty", group: "Never was a pickle" },
	{ value: "beth", label: "Beth", group: "Never was a pickle" },
	{ value: "summer", label: "Summer", group: "Never was a pickle" }
]

const TABLE_DATA = [
	{ position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
	{ position: 7, symbol: "N", name: "Nitrogen" },
	{ position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
	{ position: 56, mass: 137.33, name: "Barium" },
	{ position: 58, name: "Cerium" }
]

const Test = () => {
	const [inputText, setInputText] = useState("")
	const [activeStep, setActiveStep] = useState(1)
	const [rteInput, setRteInput] = useState("")

	const buttonText = "Button"

	return (
		<main>
			<Title order={1} align="center">
				Welcome to the Kitchen Sink!
			</Title>

			<Group>
				<Title order={2}>Typography</Title>
				<Title order={1}>Headline 1</Title>
				<Title order={2}>Headline 2</Title>
				<Title order={3}>Headline 3</Title>
				<Title order={4}>Headline 4</Title>
				<Title order={5}>Headline 5</Title>
				<Title order={6}>Headline 6</Title>
			</Group>

			<Group position="center" direction="column">
				<Container fluid padding="xl">
					<Title order={2}>Buttons</Title>
					<Group position="center" direction="row">
						{["xs", "sm", "md", "lg", "xl"].map((size) => {
							return (
								<Group key={size} direction="column">
									{[
										{},
										{ leftIcon: <SVG.Checkmark /> },
										{ rightIcon: <SVG.Carat />, variant: "outline" },
										{ compact: true, leftIcon: <SVG.Checkmark /> },
										{ compact: true, rightIcon: <SVG.Carat />, variant: "subtle" },
										{ compact: true, leftIcon: <SVG.Checkmark />, disabled: true },
										{ compact: true, rightIcon: <SVG.Carat />, disabled: true }
									].map((props: any, index: number) => {
										return (
											<Button key={size + index} size={size as MantineSize} {...props}>
												{buttonText}
											</Button>
										)
									})}
								</Group>
							)
						})}
					</Group>
				</Container>

				<Container fluid style={{ marginTop: "2rem" }}>
					<Title order={2}>Inputs</Title>
					<Group>
						<Textarea
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							label="Textarea"
							placeholder="Some test placeholder"
							description="This is a description"
							required
							invalid={inputText.length === 0 || inputText === "Button"}
							invalidText="You must enter a value"
						/>

						<Textarea
							value={inputText}
							placeholder="Some test placeholder"
							onChange={(e) => setInputText(e.target.value)}
							label="Textarea"
							description="This is a description"
						/>

						<TextInput
							value={inputText}
							placeholder="Some test placeholder"
							onChange={(e) => setInputText(e.target.value)}
							label="TextInput"
							description="This is a description"
						/>
						<NumberInput label="NumberInput" description="This is a description" />

						<TimeInput icon={<SVG.Clock />} label="TimeInput" description="This is a description" />

						<RadioGroup label="RadioGroup" description="This is a description">
							<Radio value="react">React</Radio>
							<Radio value="svelte">Svelte</Radio>
							<Radio value="ng">Angular</Radio>
							<Radio value="vue">Vue</Radio>
						</RadioGroup>

						<Select data={SELECT_DATA} />

						<DatePicker icon={<SVG.Calendar />} label="DatePicker" description="This is a description" />

						<DateRangePicker icon={<SVG.Calendar />} label="DateRangePicker" description="This is a description" />
					</Group>
				</Container>
			</Group>

			<Container fluid style={{ marginTop: "2rem" }}>
				<Title order={2}>Stepper</Title>
				<Stepper
					styles={{
						root: {
							margin: "0 3rem"
						}
					}}
					active={activeStep}
					onStepClick={setActiveStep}
					breakpoint="sm"
				>
					<Stepper.Step label="Fist step" description="description">
						Step 1 content: Create an account
					</Stepper.Step>
					<Stepper.Step label="Second step" description="description">
						Step 2 content: Verify email
					</Stepper.Step>
					<Stepper.Step label="Final step" description="description">
						Step 3 content: Get full access
					</Stepper.Step>
					<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
				</Stepper>
			</Container>

			<Container>
				<Title order={2} style={{ marginTop: "2rem" }}>
					Alert
				</Title>
				<Group>
					<Alert icon={<SVG.AlertCircle />} title="This is a title" color="red">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia con.
					</Alert>
				</Group>
			</Container>

			<Container>
				<Title order={2} style={{ marginTop: "2rem" }}>
					Table
				</Title>
				<Table
					rows={TABLE_DATA}
					headers={[
						{
							title: "Position",
							property: "position"
						},
						{
							title: "Mass",
							property: "mass"
						},
						{
							title: "Symbol",
							property: "symbol"
						},
						{
							title: "Name",
							property: "name"
						}
					]}
				/>
			</Container>

			<Container>
				<Title order={2} style={{ marginTop: "2rem" }}>
					Rich Text Editor
				</Title>
				<RichTextEditor value={rteInput} onChange={setRteInput} />
			</Container>

			<Container>
				<Title order={2} style={{ marginTop: "2rem" }}>
					Chips
				</Title>
				<Group>
					<Chips>
						<Chip value="react">React</Chip>
						<Chip value="ng">Angular</Chip>
						<Chip value="svelte">Svelte</Chip>
						<Chip value="vue">Vue</Chip>
					</Chips>
					<Chips variant="filled">
						<Chip value="react">React</Chip>
						<Chip value="ng">Angular</Chip>
						<Chip value="svelte">Svelte</Chip>
						<Chip value="vue">Vue</Chip>
					</Chips>
				</Group>
			</Container>

			<Container>
				<Title order={2} style={{ marginTop: "2rem" }}>
					Pagination
				</Title>
				<Pagination size="sm" total={10} />
			</Container>
			<Space style={{ height: "50rem" }} />
		</main>
	)
}

export default Test
