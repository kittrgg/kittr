import { Card, Title, Text } from "@kittr/ui"
import { Center, Grid, Stack } from "@mantine/core"
import { Routes } from "@Utils/lookups/routes"
import CallToAction from "./CallToAction"

/** Features that are currently a part of the platform */
const Features = () => {
	return (
		<>
			<Center pb={20} pt={40}>
				<Title preset="h1">FEATURES</Title>
			</Center>

			<Grid gutter={30} pb={20}>
				<Grid.Col sm={6} lg={3}>
					<Card title={"Kit Displayr"} icon={"/media/icons/displayr.svg"} iconAlt="Displayr Icon">
						<Text preset="lg" mt="md">
							Stop trying to make Google Sheets look good. We've done the work of making your loadouts beautiful by
							default.{" "}
							<a
								rel="noopener noreferrer"
								target="_blank"
								href={`${Routes.CHANNEL.GAME.createPath("Symfuhny", "warzone", "?k=Bullfrog")}`}
								style={{ color: "white" }}
							>
								I mean...just look at this example!
							</a>
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col sm={6} lg={3}>
					<Card title="Kit Editr" icon="/media/icons/editr.svg" iconAlt="Editr Icon">
						<Text preset="lg" mt="md">
							Collaboratively edit your kits faster, more accurately, and more easily. It takes about 10 clicks to fully
							build a kit - and even less to edit an existing one.
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col sm={6} lg={3}>
					<Card title="Youtube Emebeds" icon="/media/icons/youtube-embed.svg" iconAlt="Youtube Embed Icon">
						<Text preset="lg" mt="md">
							Let's mix in your YouTube content in a way that people will <em>want</em> to watch it. On our interface,
							your video content begs to be watched.
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col sm={6} lg={3}>
					<Card title="Bot Command Expotr" icon="/media/icons/exportr.svg" iconAlt="Exportr Icon">
						<Text preset="lg" mt="md">
							Keep your bot updated with one click and a couple keystrokes. We create your updates for you so that you
							can focus on the channel.
						</Text>
					</Card>
				</Grid.Col>
			</Grid>
			<CallToAction marginBottom="60px" header="channel bettr with kittr." />
		</>
	)
}

export default Features
