/// <reference types="cypress" />

import user from "../../fixtures/login.json"

describe("Desktop Navigation", () => {
	beforeEach(() => {
		cy.visit("/")
		cy.viewport("macbook-16")
	})

	it("Navigates to Games", () => {
		cy.get("[data-cy=desktop-games-link]").click()
		cy.location("pathname").should("include", "/games")
	})

	it("Navigates to Channels", () => {
		// Ignore redirects in dev environment
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.get("[data-cy=desktop-channels-link]").click()
		cy.location("pathname").should("include", "/channels")
	})

	it("Navigates to Blog", () => {
		cy.get("[data-cy=desktop-blog-link]").click()
		cy.location("pathname").should("include", "/blog")
	})
})

describe("Desktop Nav (Authentication)", () => {
	beforeEach(() => {
		cy.visit("/")
		cy.viewport("macbook-16")
	})

	it("Navigates to Sign Up (No Auth)", () => {
		cy.get("[data-cy=desktop-sign-up-link]").click()
		cy.location("pathname").should("include", "/sign-up")
	})

	it("Navigates to Dashboard (No Auth)", () => {
		cy.get("[data-cy=desktop-dashboard-link-no-auth]").click()
		cy.location("pathname").should("include", "/dashboard")
	})

	// TODO: Fix this test
	// it("Does not show Sign Up link (Authed)", () => {
	//   cy.login(user.email, user.password);
	//   cy.visit("/");
	//   cy.get("[data-cy=desktop-sign-up-link]").should("not.exist");
	// });

	// it("Navigates to Dashboard (Authed)", () => {
	// 	cy.visit("/")
	// 	cy.get("[data-cy=desktop-dashboard-link-authed]").click()
	// 	cy.location("pathname").should("include", "/dashboard")
	// })
})
