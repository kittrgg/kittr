import { assertSchema } from "@cypress/schema-tools"
import { schemas } from "../../schemas"
import user from "../../fixtures/login.json"
import channel from "../../fixtures/mongoose/channel.json"
import managers from "../../fixtures/managers.json"

describe("Manager API: Login With Owner", () => {
	beforeEach(() => {
		cy.logout()
		cy.login(user.email, user.password)
	})

	it("Post a new Manager (Success)", async () => {
		const token = await cy.getToken()
		cy.wait(500)
		cy.request({
			method: "POST",
			url: "/api/manager/addNewManager",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: managers["AnRFlNNbQ4d3K6nfEIRGBJm5nER3"].email,
				role: "Editor",
				channelId: channel._id
			})
		}).then((res) => {
			assertSchema(schemas)("Channel", "1.0.0")(res.body)
			expect(res.body.managers).to.be.length(4)
		})
	})

	it("Delete Manager (Success)", async () => {
		const token = await cy.getToken()
		cy.request({
			method: "DELETE",
			url: "/api/manager/removeManager",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				uid: managers["AnRFlNNbQ4d3K6nfEIRGBJm5nER3"].uid,
				channelId: channel._id
			})
		}).then((res) => {
			expect(res.body.success).eq(true)
		})
	})

	it("Post a new Manager with an invalid email (Failure)", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "POST",
			url: "/api/manager/addNewManager",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: "not actually an email",
				role: "Editor",
				channelId: channel._id
			})
		}).then((res) => {
			assertSchema(schemas)("Add Manager Error", "1.0.0")(res.body)
			expect(res.body.message).eq("That's an invalid email.")
		})
	})

	it("Post a new Manager with a user email that doesn't exist yet (Failure)", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "POST",
			url: "/api/manager/addNewManager",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: "notauser@nowhere.com",
				role: "Editor",
				channelId: channel._id
			})
		}).then((res) => {
			assertSchema(schemas)("Add Manager Error", "1.0.0")(res.body)
			expect(res.body.message).eq(
				"Username doesn’t match our records. Be sure your new manager has already created a kittr account."
			)
		})
	})

	it("Promote an administrator", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "PUT",
			url: "/api/manager/promote",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				uid: "VeoTKmMs72amUYzPRovBGJDJnGn1",
				channelId: channel._id
			})
		}).then((res) => {
			expect(res.status).eq(200)
		})
	})

	it("Demote an administrator", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "PUT",
			url: "/api/manager/demote",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				uid: "VeoTKmMs72amUYzPRovBGJDJnGn1",
				role: "Editor",
				channelId: channel._id
			})
		}).then((res) => {
			expect(res.status).eq(200)
		})
	})

	it("Get a manager's account details", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "GET",
			url: "/api/manager/getInfo?uid=VeoTKmMs72amUYzPRovBGJDJnGn1",
			headers: {
				authorization: `Bearer ${token}`
			}
		}).then((res) => {
			assertSchema(schemas)("Manager Details", "1.0.0")(res.body)
			expect(res.status).eq(200)
		})
	})

	it("Get all channels that a user is a manager of", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "GET",
			url: "/api/manager",
			headers: {
				authorization: `Bearer ${token}`
			}
		}).then((res) => {
			assertSchema(schemas)("Channel", "1.0.0")(res.body[0])
			expect(res.status).eq(200)
		})
	})
})

describe("Manager API: Login with Editor", () => {
	beforeEach(() => {
		cy.logout()
		cy.login(managers["VeoTKmMs72amUYzPRovBGJDJnGn1"].email, managers["VeoTKmMs72amUYzPRovBGJDJnGn1"].password)
	})

	it("Try to post a new Manager without role permissions (Failure)", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "POST",
			url: "/api/manager/addNewManager",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				email: managers["AnRFlNNbQ4d3K6nfEIRGBJm5nER3"].email,
				role: "Editor",
				channelId: channel._id
			})
		}).then((res) => {
			assertSchema(schemas)("Add Manager Error", "1.0.0")(res.body)
			expect(res.body.message).eq("You do not have permission to add a new manager.")
		})
	})

	it("Try to demote a Manager without role permissions (Failure)", async () => {
		const token = await cy.getToken()
		cy.request({
			failOnStatusCode: false,
			method: "PUT",
			url: "/api/manager/demote",
			headers: {
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				uid: "AnRFlNNbQ4d3K6nfEIRGBJm5nER3",
				channelId: channel._id
			})
		}).then((res) => {
			assertSchema(schemas)("Add Manager Error", "1.0.0")(res.body)
			expect(res.body.message).eq("You do not have permission to demote another manager.")
		})
	})
})
