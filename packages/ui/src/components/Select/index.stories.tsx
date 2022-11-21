import { Select } from "."

export default {
	title: "Select",
	component: Select,
	argTypes: {
		placeholder: {
			control: "text"
		}
	}
}

export const Default = (args: any) => (
	<Select
		{...args}
		data={[
			{ value: "react", label: "React" },
			{ value: "ng", label: "Angular" },
			{ value: "svelte", label: "Svelte" },
			{ value: "vue", label: "Vue" }
		]}
	/>
)
