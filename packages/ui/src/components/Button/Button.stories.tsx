import { Button } from "../Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Atom/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
		variant: {
			options: ["default", "filled", "gradient", "light", "outline"],
			control: { type: "select" }
		}
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
)

export const Default = Template.bind({})
