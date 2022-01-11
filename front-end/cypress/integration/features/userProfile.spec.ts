/// <reference types="cypress" />

describe("Desktop", () => {
	beforeEach(() => {
		cy.viewport("macbook-16")
	})

	it("Starts on default state with nothing selected", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.contains("SELECT A KIT.")
	})

	it("Selects a weapon on click and closes list", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=C58-placeholder-button]").click()
		cy.location("search").should("eq", "?k=C58")
		cy.contains("C58")
	})

	it("Shows a weapon", () => {
		cy.visit("/channel/JoeWo/warzone?k=FARA-83")
		cy.contains("FARA 83")
		cy.contains("GRU SUPPRESSOR")
	})

	it("Selects a weapon on click", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=C58-button]").click()
		cy.location("search").should("eq", "?k=C58")
		cy.get("[data-cy=C58-button]").should("have.css", "background-color", "rgb(99, 99, 99)")
	})

	it("Show all kit and profile information", () => {
		cy.visit("/channel/JoeWo/warzone?k=C58")
		cy.get("[data-cy=profile-image]")
		cy.get("[data-cy=channel-name]")
		cy.get("[data-cy=social-icons]")
		cy.get("[data-cy=kit-options]")
		cy.get("[data-cy=kit-imagery]")
		cy.get("[data-cy=kit-popularity]")
		cy.get("[data-cy=kit-stats]")
		cy.get("[data-cy=kit-blurb]")
	})

	it("Can search list of kits", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=C58-button]").should("exist")
		cy.get("[data-cy=Krig-6-button]").should("exist")
		cy.get("[data-cy=search-input]").type("C58")
		cy.get("[data-cy=C58-button]").should("exist")
		cy.get("[data-cy=Krig-6-button]").should("not.exist")
	})

	it("Can clear search input", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=search-input]").type("C58")
		cy.get("[data-cy=clear-search]").click()
		cy.get("[data-cy=search-input]").should("have.value", "")
	})

	it("Shows variants when multiple for base", () => {
		cy.visit("/channel/JoeWo/warzone?k=MP5-(MW)")
		cy.get("[data-cy=MP5--MW--variants-container]").invoke("height").should("gte", 10)
	})

	it("Click to show second variant", () => {
		cy.visit("/channel/JoeWo/warzone?weapon=AK-47-(CW)")
		cy.get("[data-cy=AK-47--CW--Primary]").click()
		cy.contains("GRU SUPPRESSOR")
		cy.contains('18.2" VDV REINFORCED')
		cy.contains("AXIAL ARMS 3X")
		cy.contains("SPETSNAZ GRIP")
		cy.contains("45 RND")
	})

	it("Shows the Not Found page when a player doesn't exist", () => {
		cy.visit("/channel/thereisnochannelhere")
		cy.contains("Sorry, but we aren't seeing this channel on kittr.")
	})
})

describe("Mobile", () => {
	beforeEach(() => {
		cy.viewport("iphone-x")
	})

	it("Starts on default state with nothing selected", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.contains("SELECT A KIT.")
		cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0)
	})

	it("Selects a weapon on click and closes list", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=C58-placeholder-button]").click()
		cy.location("search").should("eq", "?k=C58")
		cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0)
		cy.contains("C58")
	})

	it("Shows a weapon", () => {
		cy.visit("/channel/JoeWo/warzone?k=FARA-83")
		cy.contains("FARA 83")
		cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0)
	})

	it("Opens the kit list", () => {
		cy.visit("/channel/JoeWo/warzone?k=FARA-83")
		cy.get("[data-cy=kit-list-opener]").click()
		cy.get("[data-cy=kit-list]").invoke("width").should("gte", 10)
	})

	it("Selects a weapon on click and closes list", () => {
		cy.visit("/channel/JoeWo/warzone")
		cy.get("[data-cy=kit-list-opener]").click()
		cy.get("[data-cy=C58-button]").click()
		cy.location("search").should("eq", "?k=C58")
		cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0)
	})

	it("Click to show second variant using slider", () => {
		cy.visit("/channel/JoeWo/warzone?weapon=AK-47-(CW)")
		cy.get("[data-cy=slider-AK-47--CW--Primary]").click()
		cy.contains("GRU SUPPRESSOR")
		cy.contains('18.2" VDV REINFORCED')
		cy.contains("AXIAL ARMS 3X")
		cy.contains("SPETSNAZ GRIP")
		cy.contains("45 RND")
	})

	it("Click to show second variant using Kit List", () => {
		cy.visit("/channel/JoeWo/warzone?weapon=AK-47-(CW)")
		cy.get("[data-cy=kit-list-opener]").click()
		cy.get("[data-cy=AK-47--CW--Primary]").click()
		cy.contains("GRU SUPPRESSOR")
		cy.contains('18.2" VDV REINFORCED')
		cy.contains("AXIAL ARMS 3X")
		cy.contains("SPETSNAZ GRIP")
		cy.contains("45 RND")
	})
})
