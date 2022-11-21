import { NumberInput } from "."

export default {
	title: "NumberInput",
	component: NumberInput,
	argTypes: {
		placeholder: {
			control: "text"
		}
	}
}

export const Default = (args: any) => <NumberInput {...args} />
