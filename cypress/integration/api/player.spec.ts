// import { assertSchema } from "@cypress/schema-tools"
// import { schemas } from "../../schemas"
// import user from "../../fixtures/login.json"
// import channel from "../../fixtures/mongoose/channel.json"
// import game from "../../fixtures/game.json"

// describe("Channel API", () => {
// 	beforeEach(() => {
// 		cy.logout()
// 		cy.login(user.email, user.password)
// 		cy.wait(200)
// 	})

// 	it("Delete a game from a channel", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "DELETE",
// 			url: "/api/channel/game/delete",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				gameId: game._id,
// 				channelId: channel._id
// 			})
// 		}).then((res) => {
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body)
// 			expect(res.status).eq(200)
// 		})
// 	})

// 	it("Add a game to a channel", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "POST",
// 			url: "/api/channel/game/add",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				gameId: game._id,
// 				channelId: channel._id
// 			})
// 		}).then((res) => {
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body)
// 			expect(res.status).eq(200)
// 		})
// 	})

// 	it("Edit an existing kit", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "POST",
// 			url: "/api/channel/kit",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				_id: "6123362d3635383f9ccda92b",
// 				baseId: "60df5bd4bf84855a680f8922",
// 				options: [],
// 				userData: {
// 					customTitle: "",
// 					blueprint: "",
// 					featured: false,
// 					youtubeURL: "ExsrFvIsKk4&t=334s"
// 				}
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			expect(res.body.success).eq(true)
// 		})
// 	})

// 	it("Create a new kit", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "POST",
// 			url: "/api/channel/kit",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				_id: "8743962d3635383f9ccda35r",
// 				baseId: "60df5bd4bf84855a680f8922",
// 				options: [],
// 				userData: {
// 					customTitle: "test",
// 					blueprint: "",
// 					featured: false,
// 					youtubeURL: "ExsrFvIsKk4&t=334s"
// 				}
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			expect(res.body.success).eq(true)
// 		})
// 	})

// 	it("Deletes a kit", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "DELETE",
// 			url: "/api/channel/kit",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				kitId: "6123362d3635383f9ccda92b",
// 				channelId: channel._id
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			expect(res.body.success).eq(true)
// 		})
// 	})

// 	it("Edit command string for a game", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "PUT",
// 			url: "/api/channel/meta/botCommandString",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				commandString: "this is a test",
// 				gameId: game._id,
// 				channelId: channel._id
// 			})
// 		}).then((res) => {
// 			cy.log("res", res)
// 			expect(res.status).eq(200)
// 			expect(res.body.games[0].commandString).eq("this is a test")
// 		})
// 	})

// 	it("Set affiliate code for a game", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "PUT",
// 			url: "/api/channel/meta/code",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				code: "CLOAKZY",
// 				gameId: game._id,
// 				channelId: channel._id
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			expect(res.body.games[0].code).eq("CLOAKZY")
// 		})
// 	})

// 	it("Fail to set a new display name (FAILURE)", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			failOnStatusCode: false,
// 			method: "PUT",
// 			url: "/api/channel/meta/displayName",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				value: "JoeWo",
// 				_id: channel._id
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(403)
// 			expect(res.body.message).eq(
// 				"That gamertag is too similar to another channel. We don't want to confuse our system...Please choose another."
// 			)
// 		})
// 	})

// 	it("Set a new display name", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			failOnStatusCode: false,
// 			method: "PUT",
// 			url: "/api/channel/meta/displayName",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				value: "some random name",
// 				_id: channel._id
// 			})
// 		}).then((res) => {
// 			cy.log("res", res)
// 			expect(res.status).eq(200)
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body)
// 			expect(res.body.displayName).eq("some random name")
// 		})
// 	})

// 	it("Set profile image flag", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "POST",
// 			url: "/api/channel/meta/image",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				_id: channel._id
// 			})
// 		}).then((res) => {
// 			cy.log("res", res)
// 			expect(res.status).eq(200)
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body.data)
// 		})
// 	})

// 	it("Set the user's social media links", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "PUT",
// 			url: "/api/channel/meta/links",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				_id: channel._id,
// 				links: [
// 					["tiktok", "https://www.tiktok.com/@averagejoewo"],
// 					["youtube", "https://www.youtube.com/channel/UCYIwBCUkTJq6gomf5blbQ2g"],
// 					["twitter", "https://twitter.com/AverageJoeWo"]
// 				]
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body)
// 			expect(res.body.meta.links.tiktok).eq("https://www.tiktok.com/@averagejoewo")
// 		})
// 	})

// 	it("Set channel's youtube autoplay option", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "PUT",
// 			url: "/api/channel/meta/youtubeAutoplay",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({
// 				_id: channel._id,
// 				boolean: true
// 			})
// 		}).then((res) => {
// 			expect(res.status).eq(200)
// 			assertSchema(schemas)("Channel", "1.0.0")(res.body)
// 			expect(res.body.meta.youtubeAutoplay).eq(true)
// 		})
// 	})

// 	it("Delete a Channel", async () => {
// 		const token = await cy.getToken()
// 		cy.request({
// 			method: "DELETE",
// 			url: "/api/channel",
// 			headers: {
// 				authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify({ _id: channel._id })
// 		}).then((res) => {
// 			expect(res.body.deleted).eq(true)
// 		})
// 	})
// })
