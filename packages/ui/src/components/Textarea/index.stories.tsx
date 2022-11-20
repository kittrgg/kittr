import { Textarea } from "."

export default {
	title: "Textarea",
	component: Textarea,
	argTypes: {
		placeholder: {
			control: "text"
		}
	}
}

export const Default = (args: any) => <Textarea {...args} />
