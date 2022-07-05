import { TextInput } from "."

export default {
	title: "TextInput",
	component: TextInput,
	argTypes: {
		placeholder: {
			control: "text"
		}
	}
}

export const Default = (args: any) => <TextInput {...args} />
