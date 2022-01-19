import { assertSchema } from "@cypress/schema-tools";
import { schemas } from "../../schemas";

// describe("Kits API", () => {
// 	it("Get all Kit Bases for a game using the game's _id", () => {
// 		cy.request("/api/kits/bases?gameId=60da97598821ed46dc9c008c").then((res) => {
// 			assertSchema(schemas)("Kit Base", "1.0.0")(res.body[0])
// 			expect(res.body).to.be.lengthOf.above(1)
// 		})
// 	})

// 	it("Get all Kit Options for a game using the game's _id", () => {
// 		cy.request("/api/kits/options?kitBaseId=60df665ebf84855a680f897a").then((res) => {
// 			cy.log("test", res)
// 			assertSchema(schemas)("Kit Option", "1.0.0")(res.body.data[0])
// 			expect(res.body.data).to.be.lengthOf.above(1)
// 		})
// 	})
// })
