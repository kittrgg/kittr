/// <reference types="cypress" />

import newChannel from "../../../fixtures/mongoose/newChannel.json"
import { basicUser } from "../../../plugins/seed"

describe("Channel List View", () => {
	const { urlSafeName } = basicUser

	before(() => {
		cy.task("db:seed-basic-user")
	})

	after(() => {
		cy.task("db:remove-basic-user")
	})

	beforeEach(() => {
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
	})

	// it("Renders", () => {
	// 	cy.login(user.email, user.password)
	// 	cy.contains(urlSafeName)
	// })

	it("Opens a channel", () => {
		cy.get(`[data-cy=${urlSafeName}-channel-button]`).click()
		cy.contains("SUBSCRIPTION SETTINGS")
	})

	it("Disallow similar named channels", () => {
		cy.get("[data-cy=create-new-channel]").click()
		cy.get("[name=displayNameInput").type(urlSafeName)
		cy.get("[data-cy=create-channel-button]").click()
		cy.contains("That name is too similar to another channel")
	})

	it("Creates a new channel", () => {
		cy.get("[data-cy=create-new-channel]").click()
		cy.get("[name=displayNameInput").type(newChannel.displayName)
		cy.get("[data-cy=create-channel-button]").click()
		cy.get(`[data-cy=${newChannel.displayName}-channel-button]`)
	})

	it("Reloads the channel list", () => {
		cy.get(`[data-cy=${urlSafeName}-channel-button]`)
		cy.get("[data-cy=renew-svg]").click()
		cy.get(`[data-cy=${urlSafeName}-channel-button]`)
	})
})
