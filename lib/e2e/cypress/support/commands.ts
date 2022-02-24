/// <reference path="index.d.ts" />

Cypress.Commands.add("login", (email, password) => {
	indexedDB.deleteDatabase("firebaseLocalStorageDb")
	cy.visit("/dashboard")
	cy.contains("LOG IN")
	cy.get("[name=email]").type(email)
	cy.get("[name=password]").type(password)
	cy.get("[data-cy=login-button]").click()
	cy.get("[data-cy=your-channels-title]")
})

Cypress.Commands.add("logout", () => {
	// This line is needed for local testing. It shouldn't affect the CI tests.
	indexedDB.deleteDatabase("firebaseLocalStorageDb")
	cy.visit("/dashboard")
	cy.get("[data-cy=profile-container-button]").click()
	cy.get("[data-cy=logout-button]").click()
	cy.contains("get kittd.")
})

Cypress.Commands.add("clearEmulatorAuth", () => {
	// This line is needed for local testing. It shouldn't affect the CI tests.
	indexedDB.deleteDatabase("firebaseLocalStorageDb")
})
