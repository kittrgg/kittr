import { render, screen } from "@test-utils"
import { Radio, RadioGroup } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(
			<RadioGroup
				value="react"
				label="Select your favorite framework/library"
				description="This is anonymous"
				required
				invalid={!false}
				invalidText="Please select a framework/library"
			>
				<Radio value="react">React</Radio>
				<Radio value="svelte">Svelte</Radio>
				<Radio value="ng">Angular</Radio>
				<Radio value="vue">Vue</Radio>
			</RadioGroup>
		)
	})

	it("Renders with invalid text", async () => {
		render(
			<RadioGroup value="" label="Select your favorite framework/library" invalid invalidText="Test invalid text">
				<Radio value="react">React</Radio>
			</RadioGroup>
		)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
