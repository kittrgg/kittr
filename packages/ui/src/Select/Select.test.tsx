import { render, screen } from "@test-utils"
import { Select } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(
			<Select
				data={[
					{ value: "react", label: "React" },
					{ value: "ng", label: "Angular" },
					{ value: "svelte", label: "Svelte" }
				]}
			/>
		)
	})

	it("Renders with invalid text", async () => {
		render(
			<Select
				data={[
					{ value: "react", label: "React" },
					{ value: "ng", label: "Angular" },
					{ value: "svelte", label: "Svelte" }
				]}
				invalid
				invalidText="Test invalid text"
			/>
		)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
