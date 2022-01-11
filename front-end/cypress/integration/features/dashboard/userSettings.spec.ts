/// <reference types="cypress" />

import { v4 as uuid } from "uuid"
import user from "../../../fixtures/login.json"

describe("User Settings", () => {
	beforeEach(() => {
		cy.logout()
		cy.intercept("https://www.googleapis.com/identitytoolkit/**", (req) => req.reply("")).as("auth mocks only")
		cy.login(user.email, user.password)
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
		cy.get("[data-cy=user-settings-button]").click()
	})

	it("Changes display name", () => {
		cy.get("[name=displayName]").focus().clear().type(uuid())
		cy.get("[data-cy=confirm-name-change]").click()
		cy.get("[data-cy=confirm-name-change]").should("be.disabled")
	})
})
