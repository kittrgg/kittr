import { getLayout } from "@Components/layouts/Dashboard"
import { Image } from "ui"
import { SVG } from "ui"
import { Alert, Card, Container, Group, Title } from "ui"
import { useMantineTheme } from "@Hooks/index"
import { imageDict } from "@Utils/imageDict"

const DUMMY_TRIALS = [
	{
		id: "asdf",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	},
	{
		id: "asd",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	},
	{
		id: "as",
		title: "American Kennel Club Championship",
		date: "January 2, 2022",
		location: "Anaheim, CA"
	}
]

const Dogs = () => {
	const { spacing } = useMantineTheme()

	return (
		<div>
			<Alert
				icon={<SVG.AlertCircle width="24px" style={{ position: "relative", top: "-2px" }} />}
				title="You have unsaved changes!"
				color="red"
				radius="xl"
				withCloseButton
				onClose={() => console.log("ringdog pooped on the carpet")}
				styles={{ root: { padding: spacing.xl } }}
			>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia con.
			</Alert>

			<Container size="xl">
				<Title order={1} style={{ margin: "12px 0" }}>
					My Events
				</Title>
				<Group spacing="lg" position="center">
					{DUMMY_TRIALS.map((trial) => {
						return (
							<Card
								key={trial.id}
								padding="sm"
								shadow="lg"
								radius="xl"
								withBorder
								styles={{ root: { width: "300px" } }}
							>
								<Card.Section>
									<Image src={imageDict.dummyTrial.src} alt={imageDict.dummyTrial.alt} width="100%" height="200px" />
								</Card.Section>
								<div>
									<p>{trial.title}</p>
									<p>{trial.date}</p>
									<p>{trial.location}</p>
								</div>
							</Card>
						)
					})}
				</Group>
			</Container>
		</div>
	)
}

Dogs.getLayout = getLayout

export default Dogs
