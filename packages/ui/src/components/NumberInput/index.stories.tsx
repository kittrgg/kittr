import { NumberInput } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Atom/NumberInput",
	component: NumberInput,
	args: {
		variant: "default"
	}
} as ComponentMeta<typeof NumberInput>

const Template: ComponentStory<typeof NumberInput> = (args) => (
	<NumberInput {...args} />
)

export const Default = Template.bind({})

export const Filled = Template.bind({})
Filled.args = {
	variant: "filled"
}

export const Description = Template.bind({})
Description.args = {
	description: "Button Description"
}

export const Step_and_Precision = Template.bind({})
Step_and_Precision.args = {
	step: 0.1,
	precision: 1
}
