import { render, screen } from "@test-utils"
import { DatePicker } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<DatePicker />)
	})

	it("Renders with invalid text", async () => {
		render(<DatePicker invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
