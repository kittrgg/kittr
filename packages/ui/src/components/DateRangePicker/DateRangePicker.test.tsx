import { render, screen } from "@test-utils"
import { DateRangePicker } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<DateRangePicker />)
	})

	it("Renders with invalid text", async () => {
		render(<DateRangePicker invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
