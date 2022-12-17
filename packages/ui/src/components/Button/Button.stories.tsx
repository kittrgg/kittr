import { Button } from "../Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Atom/Button",
	component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
)

export const Default = Template.bind({})
Default.args = {
	onClick: () => console.log("Button clicked!")
}

export const Filled = Template.bind({})
Filled.args = {
	variant: "filled",
	onClick: () => console.log("Button clicked!")
}

export const Gradient = Template.bind({})
Gradient.args = {
	variant: "gradient",
	onClick: () => console.log("Button clicked!")
}

export const Light = Template.bind({})
Light.args = {
	variant: "light",
	onClick: () => console.log("Button clicked!")
}

export const Outline = Template.bind({})
Outline.args = {
	variant: "outline",
	onClick: () => console.log("Button clicked!")
}
