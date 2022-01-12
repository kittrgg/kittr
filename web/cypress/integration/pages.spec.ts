/// <reference types="cypress" />

describe("Index Page Navigation", () => {
	beforeEach(() => {
		cy.visit("/")
		cy.viewport("macbook-16")
	})

	it("Navigates to a game's page", () => {
		// Ignore redirects in dev environment
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.get("[data-cy=warzone-button]").click()
		cy.location("pathname").should("include", "/games/warzone/1")
	})

	it("Navigates to a channel's profile", () => {
		cy.get("[data-cy=JoeWo-button]").first().click()
		cy.location("pathname").should("include", "/channel/JoeWo")
	})

	it("Navigates to games library", () => {
		cy.get("[data-cy=game-library-button]").click()
		cy.location("pathname").should("include", "/games")
	})

	it("Navigates to channels channels", () => {
		cy.get("[data-cy=channels-link-button]").click()
		cy.location("pathname").should("include", "/channels")
	})
})

describe("Games Page", () => {
	beforeEach(() => {
		cy.visit("/games")
		cy.viewport("macbook-16")
	})

	// Ignore redirects in dev environment
	Cypress.on("uncaught:exception", (err) => {
		return false
	})

	it("Navigates to a game's page", () => {
		cy.get("[data-cy=warzone-button]").click()
		cy.location("pathname").should("include", "/games/warzone/1")
	})
})

describe("Channels Page", () => {
	beforeEach(() => {
		cy.visit("/channels/1")
		cy.viewport("macbook-16")
	})

	it("Shows ten channels", () => {
		cy.get("[data-cy=channel-list-item]").should("have.length", 10)
	})

	it("Use the search bar", () => {
		cy.get("[data-cy=channel-search-input]").type("anthonyshew{enter}")
		cy.location("pathname").should("include", "/channels/search/anthonyshew")
	})

	it("Navigate to a channel", () => {
		cy.get("[data-cy=JoeWo-profile-link]").click()
		cy.location("pathname").should("include", "/channel/JoeWo")
	})

	it("Navigates back and forth between page numbers", () => {
		cy.get("[data-cy=increment-page]").click()
		cy.location("pathname").should("include", "/channels/2")
		cy.get("[data-cy=decrement-page]").click()
		cy.location("pathname").should("include", "/channels/1")
	})
})

describe("Individual Game Page", () => {
	beforeEach(() => {
		cy.visit("/games/warzone")
		cy.viewport("macbook-16")
	})

	it("Use the search bar", () => {
		cy.get("[data-cy=channel-search-input]").type("anthonyshew{enter}")
		cy.location("pathname").should("include", "/channels/search/anthonyshew")
	})

	it("Navigate to a channel", () => {
		cy.get("[data-cy=JoeWo-profile-link]").click()
		cy.location("pathname").should("include", "/channel/JoeWo")
	})

	it("Navigates back and forth between page numbers", () => {
		cy.get("[data-cy=increment-page]").click()
		cy.location("pathname").should("include", "/games/warzone/2")
		cy.get("[data-cy=decrement-page]").click()
		cy.location("pathname").should("include", "/games/warzone/1")
	})
})
