import { render, screen } from "@test-utils"
import { NumberInput } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<NumberInput />)
	})

	it("Renders with invalid text", async () => {
		render(<NumberInput invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
