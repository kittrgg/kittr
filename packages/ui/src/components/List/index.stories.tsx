import { List } from "."
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Molecule/List",
	component: List
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
	<List {...args}>List</List>
)

export const Default = Template.bind({})
Default.args = {}
