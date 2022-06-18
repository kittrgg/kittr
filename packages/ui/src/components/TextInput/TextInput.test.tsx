import { render, screen } from "@test-utils"
import { TextInput } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<TextInput />)
	})

	it("Renders with invalid text", async () => {
		render(<TextInput invalid invalidText="Test invalid text" />)

		expect(screen.getByText("Test invalid text")).toBeInTheDocument()
	})
})
