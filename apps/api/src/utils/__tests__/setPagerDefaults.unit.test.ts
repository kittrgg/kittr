import { setPagerDefaults } from "@Utils/setPagerDefaults"

describe("setPagerDefaults", () => {
	it.concurrent("Uses default values", () => {
		const val = setPagerDefaults({}, 0, 10)
		expect(val).toEqual({ skip: 0, take: 10 })
	})

	it.concurrent("Uses values from client query", () => {
		const val = setPagerDefaults({ skip: "40", take: "50" }, 0, 10)
		expect(val).toEqual({ skip: 40, take: 50 })
	})
})
