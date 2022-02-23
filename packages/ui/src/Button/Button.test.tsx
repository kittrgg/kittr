import { render, screen, getComputedStyle } from "@test-utils"
import { Button } from "./index"

describe("Button", () => {
	it("Renders", async () => {
		render(<Button>Test Text</Button>)

		screen.getByText("Test Text")
	})

	it("Allow disabled on <button> tag", async () => {
		render(<Button disabled>Test Text</Button>)
		// TODO: Try changing the 'lib' compiler option to include 'dom'.
		// @ts-ignore
		expect(screen.getByText("Test Text").closest("button")).toBeDisabled()
	})

	it("Uses md radius on xs size", async () => {
		render(
			<Button id="button" size="xs">
				Test Text
			</Button>
		)

		const style = getComputedStyle("button")
		expect(style.borderRadius).toBe("8px")
	})

	it("Uses lg radius on sm and up", async () => {
		render(
			<Button id="button" size="sm">
				Test Text
			</Button>
		)

		const style = getComputedStyle("button")
		expect(style.borderRadius).toBe("16px")
	})
})
