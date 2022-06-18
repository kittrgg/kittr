import { Button } from "."

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button
}

export const Default = () => <Button variant="default">Testy boi</Button>
export const Filled = () => <Button variant="filled">Testy boi</Button>
export const Gradient = () => <Button variant="gradient">Testy boi</Button>
export const Light = () => <Button variant="light">Testy boi</Button>
export const Outline = () => <Button variant="outline">Testy boi</Button>
