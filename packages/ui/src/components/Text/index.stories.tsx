import { Text } from "."

export default {
	title: "Text",
	component: Text
}

export const Default = () => (
	<div>
		<Text preset="xxs semibold">This is a a test.</Text>
		<Text preset="xxs">This is a a test.</Text>
		<Text preset="xs semibold">This is a a test.</Text>
		<Text preset="xs italic">This is a a test.</Text>
		<Text preset="xs">This is a a test.</Text>
		<Text preset="sm semibold">This is a a test.</Text>
		<Text preset="sm italic">This is a a test.</Text>
		<Text preset="sm bold">This is a a test.</Text>
		<Text preset="sm">This is a a test.</Text>
		<Text preset="md semibold">This is a a test.</Text>
		<Text preset="md italic">This is a a test.</Text>
		<Text preset="md bold">This is a a test.</Text>
		<Text preset="md">This is a a test.</Text>
		<Text preset="lg semibold">This is a a test.</Text>
		<Text preset="lg italic">This is a a test.</Text>
		<Text preset="lg">This is a a test.</Text>
	</div>
)
