import { NewTitle } from "."
import { render, screen } from "@testing-library/react"

describe("", () => {
	test("Uses h1 for order prop being 1", () => {
		render(<NewTitle order={1}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 1 })
	})

	test("Uses h2 for order prop being 2", () => {
		render(<NewTitle order={2}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 2 })
	})

	test("Uses h3 for order prop being 3", () => {
		render(<NewTitle order={3}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 3 })
	})

	test("Uses h4 for order prop being 4", () => {
		render(<NewTitle order={4}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 4 })
	})

	test("Uses h5 for order prop being 5", () => {
		render(<NewTitle order={5}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 5 })
	})

	test("Uses h6 for order prop being 6", () => {
		render(<NewTitle order={6}>I'm a title!</NewTitle>)

		screen.findByText("I'm a title!")
		screen.getByRole("heading", { level: 6 })
	})
})
