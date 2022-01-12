import { assertSchema } from "@cypress/schema-tools"
import { schemas } from "../../schemas"

describe("Games API", () => {
	it("Get all games", () => {
		cy.request("/api/games").then((res) => {
			assertSchema(schemas)("Game", "1.0.0")(res.body[0])
			expect(res.body).to.have.length(4)
		})
	})

	it("Get a game by urlSafeName", () => {
		cy.request("/api/games?urlSafeName=warzone").then((res) => {
			assertSchema(schemas)("Game", "1.0.0")(res.body[0])
			expect(res.body).to.have.length(1)
		})
	})
})
