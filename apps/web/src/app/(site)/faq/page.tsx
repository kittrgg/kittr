import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	H1,
} from '@kittr/ui/new';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';

export const generateMetadata = () =>
	generateKittrMetadata({
		title: 'Frequently Asked Questions',
		description: 'Answer to frequently asked questions about kittr?',
		canonicalURL: '/faq',
	});

function Page() {
	return (
		<div className="flex flex-col gap-6">
			<H1>FAQ</H1>

			<Accordion type="single">
				<AccordionItem value="What is kittr?">
					<AccordionTrigger>What is kittr?</AccordionTrigger>
					<AccordionContent>
						kittr is how you share your loadouts with your channel community. We
						saw that there wasn&apos;t really any great way for a player to
						share loadouts on Twitch - so we made one. There were ways,
						certainly...But no outstanding solution to this obviously common
						channel need.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="How does it work?">
					<AccordionTrigger>How does it work?</AccordionTrigger>
					<AccordionContent>
						A player or mod can make an account and pick out the games that will
						be found on channel. From there, you can make a bunch of kits
						(loadouts, setups, whatever you like to call them) and export the
						bot commands for those kits into your Twitch chat. The whole thing
						takes 20 minutes tops. Now, the next time that someone types in your
						text command, they&apos;ll be given the link to kittr for that
						particular kit - or just the screen for everything if they are
						coming from !loadouts.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="Why should I use kittr for my channel?">
					<AccordionTrigger>
						Why should I use kittr for my channel?
					</AccordionTrigger>
					<AccordionContent>
						We truly believe that we are the best option for sharing
						loadouts/setups/customizations to your channel&apos;s audience. What
						we have looks and feels great, does its job (sharing info with your
						peeps), and can help your YouTube performance, too. Comparing to
						other options that you may have for sharing your loadouts with your
						audience, we think we have easily the best option right here.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="How could kittr help my YouTube views?">
					<AccordionTrigger>
						How could kittr help my YouTube views?
					</AccordionTrigger>
					<AccordionContent>
						On our platform, you can embed your YouTube videos that go with a
						certain weapon or item. This way, we&apos;re putting your content
						front and center every time someone wants to find out about your
						kit. That&apos;s just one more opportunity that someone can press
						play. We also have an autoplay feature that can be enabled.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="I'm a mod. Why would I want to use this?">
					<AccordionTrigger>
						I&apos;m a mod. Why would I want to use this?
					</AccordionTrigger>
					<AccordionContent>
						As a mod, you have chat to contend with most of the time.
						That&apos;s probably enough of a job right there by itself. We want
						to make keeping a solid, accurate, beautiful set of commands for the
						channel&apos;s kits easy to handle. On kittr, it can take about
						15-20 minutes to set up a brand new profile. After that, making an
						edit to a command can take as little as 5 seconds of your time and 3
						clicks with your pointer finger. Now get back over there and wrangle
						chat!
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="Why is this better than a Google Sheet?">
					<AccordionTrigger>
						Why is this better than a Google Sheet?
					</AccordionTrigger>
					<AccordionContent>
						Let&apos;s face it: Your Google Sheet is ugly and difficult for your
						users to read. Our opinion is that no matter how hard you try,
						you&apos;re not going to end up with something that looks better
						than our Kit Displayr. On top of that, our platform is easier to
						create and edit than a Google Sheet. In a Google Sheet, you&apos;ll
						have to find the right cell to edit, type in your edit, make sure
						you have no typos, format it right, it&apos;s just a whole thing.
						But on kittr, you make two or three clicks and your edit is DONE. No
						mistakes, no worries.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="Why is this better than just a text command?">
					<AccordionTrigger>
						Why is this better than just a text command?
					</AccordionTrigger>
					<AccordionContent>
						Sure, you could just respond about the kit right there in chat with
						a text response to your command. But that&apos;s just so...boring,
						isn&apos;t it? And, on top of that, those text commands can really
						start piling up and clog up chat. Chat is a place for your community
						to interact, not read the same text commands all day! Additionally,
						you&apos;re right back to the problem you had with a Google Sheet
						when you are working with plain text. Typos, formatting, sweating it
						out to make sure the info is correct. Let us handle that hard part!
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="Why is the better than just linking to my YouTube videos?">
					<AccordionTrigger>
						Why is the better than just linking to my YouTube videos?
					</AccordionTrigger>
					<AccordionContent>
						Let&apos;s be honest. If someone requested your loadout kit, they
						probably just want to know about the attachments. They are already
						probably watching you use the setup right there on channel. If they
						ask for your kit, they probably just want to know. We&apos;ve asked
						a lot, a lot, A LOT of viewers over time with this project and they
						all say the exact same thing: They hate it when the player links to
						a YouTube video for their loadout commands. Let&apos;s do better
						than that by offering up your YouTube content in a more pleasant
						way. Embed your YouTube content on our platform and your viewers can
						watch it more passively as they take in more information about your
						kit. We actually think that you will end up with MORE youtube views
						if you link to us. Here&apos;s why. Our analytics show that visitors
						to our site visit about 6-8 kits on average. So, if you&apos;ve
						embedded your content, that&apos;s WAY more times that someone has
						your content in front of them - and they&apos;ll actually watch it
						if they want to watch it (better engagement metrics!). We also have
						an option to enable auto-playing if you prefer it.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="How much does kittr cost to use?">
					<AccordionTrigger>How much does kittr cost to use?</AccordionTrigger>
					<AccordionContent>
						It&apos;s free. We want to help player, not hurt them. Our goal is
						to help your channel get better, not reach in your wallet.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default Page;
