import { List } from "."
import SVG from "../SVG"
import { ActionIcon } from "@mantine/core"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Molecule/List",
	component: List
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
	<List {...args}>List</List>
)

export const Default = Template.bind({})
Default.args = {
	items: [
		{
			id: 0,
			displayName: "Item without Component"
		},
		{
			id: 1,
			displayName: "Item with Component",
			icon: (
				<ActionIcon
					radius="lg"
					size="lg"
					style={{ float: "right", bottom: 7 }}
					onClick={() => console.log("Icon Clicked")}
				>
					<SVG.Pencil />
				</ActionIcon>
			)
		}
	]
}
