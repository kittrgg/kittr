import { Title, NewTitle } from "."

export default {
	title: "Typography/Title",
	component: NewTitle
}

export const Defaults = () => (
	<div>
		<NewTitle order={1}>This is a test.</NewTitle>
	</div>
)

export const H1StylesForAnH2 = () => (
	<Title preset="h1" order={2}>
		What a test.
	</Title>
)
