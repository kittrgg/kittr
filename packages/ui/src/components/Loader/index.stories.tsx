import { Loader } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Atom/Loader",
	component: Loader,
	argTypes: {
		variant: { options: ["dots", "bars", "oval"], control: { type: "select" } }
	}
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
	variant: "dots"
}
