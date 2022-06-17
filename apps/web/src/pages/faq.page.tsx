import { Container, createStyles, Title, Accordion } from "@mantine/core"

import PageWrapper from "@Components/layouts/PageWrapper"
import SVG from "@Components/shared/SVG"
import colors from "@Colors"

const FAQ = () => {
	const { classes } = useStyles()

	return (
		<PageWrapper title="FAQ | kittr" description="Frequently asked questions about kittr.">
			<Container fluid sx={{ padding: "2%", margin: "0 2%" }}>
				<Title order={2} className={classes.title}>
					FAQ
				</Title>

				<Container fluid className={classes.wrapper}>
					<Accordion
						iconPosition="right"
						icon={<SVG.Carat width="20px" style={{ transform: "rotate(180deg)" }} />}
						classNames={{
							item: classes.item,
							control: classes.control,
							content: classes.content
						}}
					>
						<Accordion.Item label="What is kittr?">
							<p>
								Kittr is how you share your loadouts with your channel community. We saw that there wasn't really any
								great way for a player to share loadouts on Twitch - so we made one. There were ways, certainly...But no
								outstanding solution to this obviously common channel need.
							</p>
						</Accordion.Item>

						<Accordion.Item label="How does it work?">
							<p>
								A player or mod can make an account and pick out the games that will be found on channel. From there,
								you can make a bunch of kits (loadouts, setups, whatever you like to call them) and export the bot
								commands for those kits into your Twitch chat. The whole thing takes 20 minutes tops.
							</p>
							<p>
								Now, the next time that someone types in your text command, they'll be given the link to kittr for that
								particular kit - or just the screen for everything if they are coming from !loadouts.
							</p>
						</Accordion.Item>

						<Accordion.Item label="Why should I use kittr for my channel?">
							<p>
								We truly believe that we are the best option for sharing loadouts/setups/customizations to your
								channel's audience. What we have looks and feels great, does its job (sharing info with your peeps), and
								can help your YouTube performance, too.
							</p>
							<p>
								Comparing to other options that you may have for sharing your loadouts with your audience, we think we
								have easily the best option right here.
							</p>
						</Accordion.Item>

						<Accordion.Item label="How could kittr help my YouTube views?">
							<p>
								On our platform, you can embed your YouTube videos that go with a certain weapon or item. This way,
								we're putting your content front and center every time someone wants to find out about your kit. That's
								just one more opportunity that someone can press play. We also have an autoplay feature that can be
								enabled.
							</p>
						</Accordion.Item>

						<Accordion.Item label="I'm a mod. Why would I want to use this?">
							<p>
								As a mod, you have chat to contend with most of the time. That's probably enough of a job right there by
								itself. We want to make keeping a solid, accurate, beautiful set of commands for the channel's kits easy
								to handle.
							</p>
							<p>
								On kittr, it can take about 15-20 minutes to set up a brand new profile. After that, making an edit to a
								command can take as little as 5 seconds of your time and 3 clicks with your pointer finger. Now get back
								over there and wrangle chat!
							</p>
						</Accordion.Item>

						<Accordion.Item label="Why is this better than a Google Sheet?">
							<p>
								Let's face it: Your Google Sheet is ugly and difficult for your users to read. Our opinion is that no
								matter how hard you try, you're not going to end up with something that looks better than our Kit
								Displayr.
							</p>
							<p>
								On top of that, our platform is easier to create and edit than a Google Sheet. In a Google Sheet, you'll
								have to find the right cell to edit, type in your edit, make sure you have no typos, format it right,
								it's just a whole thing. But on kittr, you make two or three clicks and your edit is DONE. No mistakes,
								no worries.
							</p>
						</Accordion.Item>

						<Accordion.Item label="Why is this better than just a text command?">
							<p>
								Sure, you could just respond about the kit right there in chat with a text response to your command. But
								that's just so...boring, isn't it? And, on top of that, those text commands can really start piling up
								and clog up chat. Chat is a place for your community to interact, not read the same text commands all
								day!
							</p>
							<p>
								Additionally, you're right back to the problem you had with a Google Sheet when you are working with
								plain text. Typos, formatting, sweating it out to make sure the info is correct. Let us handle that hard
								part!
							</p>
						</Accordion.Item>

						<Accordion.Item label="Why is this better than just linking to my YouTube video?">
							<p>
								Let's be honest. If someone requested your loadout kit, they probably just want to know about the
								attachments. They are already probably watching you use the setup right there on channel. If they ask
								for your kit, they probably just want to know. We've asked a lot, a lot, A LOT of viewers over time with
								this project and they all say the exact same thing: They hate it when the player links to a YouTube
								video for their loadout commands.
							</p>
							<p>
								Let's do better than that by offering up your YouTube content in a more pleasant way. Embed your YouTube
								content on our platform and your viewers can watch it more passively as they take in more information
								about your kit. We actually think that you will end up with MORE youtube views if you link to us. Here's
								why.
							</p>
							<p>
								Our analytics show that visitors to our site visit about 6-8 kits on average. So, if you've embedded
								your content, that's WAY more times that someone has your content in front of them - and they'll
								actually watch it if they want to watch it (better engagement metrics!). We also have an option to
								enable auto-playing if you prefer it.
							</p>
						</Accordion.Item>

						<Accordion.Item label="How much does kittr cost to use?">
							<p>
								It's free. We want to help player, not hurt them. Our goal is to help your channel get better, not reach
								in your wallet.
							</p>
						</Accordion.Item>
					</Accordion>
				</Container>
			</Container>
		</PageWrapper>
	)
}

export default FAQ

const useStyles = createStyles((theme, _params, getRef) => {
	const control = getRef("control")

	return {
		wrapper: {
			padding: "20px",
			backgroundColor: colors.dark,
			borderRadius: "24px"
		},

		// header styles will be made global
		title: {
			fontSize: "22px",
			fontWeight: 600,
			fontFamily: '"Montserrat", sans-serif',
			letterSpacing: "2px",
			margin: "12px 0 36px",
			color: theme.white
		},

		control: {
			backgroundColor: colors.dark,
			borderRadius: theme.radius.xl,
			color: theme.white,
			fontSize: "22px",
			padding: theme.spacing.lg,
			ref: control
		},

		item: {
			margin: "14px 0 56px",
			borderBottom: "none",

			[`& .${control}:hover`]: {
				backgroundColor: colors.middle
			}
		},

		content: {
			color: "white",
			fontSize: theme.fontSizes.lg,
			padding: `0 ${theme.spacing.sm}px`,

			["& p"]: {
				margin: "24px 0"
			}
		}
	}
})

