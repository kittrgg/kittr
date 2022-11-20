/// <reference types="cypress" />
import user from "../fixtures/login.json"

describe("Desktop Authentication Flows", () => {
	beforeEach(() => {
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
	})

	it("Shows login screen when not logged in", () => {
		cy.contains("LOG IN")
	})

	it("Logs in", () => {
		cy.contains("LOG IN")
		cy.get("[name=email]").type(user.email)
		cy.get("[name=password]").type(user.password)
		cy.get("[data-cy=login-button]").click()
		cy.get("[data-cy=your-channels-title]")
	})

	it("Logs out", () => {
		cy.get("[data-cy=profile-container-button]").click()
		cy.get("[data-cy=logout-button]").click()
		cy.contains("get kittd.")
	})

	it("Unsuccessful login for bad email", () => {
		// Ignore error thrown by failed authentation
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.get("[name=email]").type("asdf")
		cy.get("[data-cy=login-button]").click()
		cy.contains("Not registered yet?")
	})

	it("Unsuccessful login for bad credentials", () => {
		// Ignore error thrown by failed authentation
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.contains("LOG IN")
		cy.get("[name=email]").type("test123@test123.com")
		cy.get("[name=password]").type("testpasswordtestpassword")
		cy.get("[data-cy=login-button]").click()
		cy.contains("Either your email or password is wrong.")
	})

	it("Navigates to sign up form", () => {
		cy.contains("Create an account.").click()
		cy.location("pathname").should("include", "/sign-up")
	})

	it("Navigates to forgotten password form", () => {
		cy.contains("Forgot password?").click()
		cy.location("pathname").should("include", "/forgot-password")
	})
})
