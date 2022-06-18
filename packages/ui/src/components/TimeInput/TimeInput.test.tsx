import { render, screen } from "@test-utils"
import { TimeInput } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<TimeInput />)
	})

	it("Renders with invalid text", async () => {
		render(<TimeInput invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
