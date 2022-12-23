import { Accordion } from "../Accordion"
import { Text } from "../Text"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Molecule/Accordion",
	component: Accordion
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion sx={{ width: "75%" }} {...args} />
)

export const Default = Template.bind({})

Default.args = {
	items: [
		{
			title: "What is kittr?",
			content: (
				<Text>
					Kittr is how you share your loadouts with your channel community. We
					saw that there wasn't really any great way for a player to share
					loadouts on Twitch - so we made one. There were ways, certainly...But
					no outstanding solution to this obviously common channel need.
				</Text>
			)
		},
		{
			title: "How does it work?",
			content: (
				<>
					<Text>
						A player or mod can make an account and pick out the games that will
						be found on channel. From there, you can make a bunch of kits
						(loadouts, setups, whatever you like to call them) and export the
						bot commands for those kits into your Twitch chat. The whole thing
						takes 20 minutes tops.
					</Text>
					<Text>
						Now, the next time that someone types in your text command, they'll
						be given the link to kittr for that particular kit - or just the
						screen for everything if they are coming from !loadouts.
					</Text>
				</>
			)
		}
	]
}
