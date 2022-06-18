import { Button } from "./Button"

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "frig yaayye",
	component: Button
}

export const Primary = () => <Button label="test" />
