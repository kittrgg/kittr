/// <reference types="cypress" />

describe("Footer Navigation", () => {
	beforeEach(() => {
		cy.visit("/")
		cy.viewport("macbook-16")
	})

	it("Navigates to Games", () => {
		cy.get("[data-cy=footer-games-link]").click()
		cy.location("pathname").should("include", "/games")
	})

	it("Navigates to Channels", () => {
		// Ignore redirects in dev environment
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.get("[data-cy=footer-channels-link]").click()
		cy.location("pathname").should("include", "/channels")
	})

	it("Navigates to Blog", () => {
		cy.get("[data-cy=footer-blog-link]").click()
		cy.location("pathname").should("include", "/blog")
	})

	it("Navigates to About", () => {
		cy.get("[data-cy=footer-about-link]").click()
		cy.location("pathname").should("include", "/about")
	})

	it("Navigates to FAQ", () => {
		cy.get("[data-cy=footer-faq-link]").click()
		cy.location("pathname").should("include", "/faq")
	})

	it("Navigates to Contact Us", () => {
		cy.get("[data-cy=footer-contact-link]").click()
		cy.location("pathname").should("include", "/contact-us")
	})

	it("Navigates to Dashboard", () => {
		cy.get("[data-cy=footer-dashboard-link]").click()
		cy.location("pathname").should("include", "/dashboard")
	})

	it("Navigates to Terms", () => {
		cy.get("[data-cy=footer-terms-link]").click()
		cy.location("pathname").should("include", "/terms-of-use")
	})

	it("Navigates to Privacy Policy", () => {
		cy.get("[data-cy=footer-privacy-link]").click()
		cy.location("pathname").should("include", "/privacy-policy")
	})
})
