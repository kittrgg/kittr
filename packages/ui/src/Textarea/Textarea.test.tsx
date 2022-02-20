import { render, screen } from "@test-utils"
import { Textarea } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<Textarea />)
	})

	it("Renders with invalid text", async () => {
		render(<Textarea invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
