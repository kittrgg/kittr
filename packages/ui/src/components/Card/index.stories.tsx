import { Card } from "."

export default {
	title: "Title",
	component: Card
}

export const Defaults = () => (
	<div>
		<Card preset="lg" title="This is a test">
			This is a test.
		</Card>
	</div>
)
