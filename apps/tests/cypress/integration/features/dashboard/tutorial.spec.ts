// /// <reference types="cypress" />

// import tutorialChannel from "../../../fixtures/tutorial-channel.json"
// import { basicUser } from "../../../plugins/seed"

// describe("Dashboard Tutorial", () => {
// 	const { urlSafeName } = basicUser

// 	const getBasicUserButton = () =>
// 		cy.get(`[data-cy=${urlSafeName}-channel-button]`)

// 	before(() => {
// 		cy.task("db:seed-basic-user")
// 		cy.login("ringberg@dev.com", "123123")
// 	})

// 	after(() => {
// 		cy.task("db:remove-basic-user")
// 	})
// 	beforeEach(() => {
// 		cy.visit("/dashboard")
// 		cy.viewport("macbook-16")
// 	})

// 	it('Close tutorial using "Skip Tour" button', () => {
// 		cy.get("[data-cy=start-tutorial-button]").click()
// 		cy.contains("SKIP TOUR").click()
// 	})

// 	it('Close tutorial using "X"', () => {
// 		cy.get("[data-cy=start-tutorial-button]").click()
// 		cy.get("[data-cy=modal-x-close]").click()
// 	})

// 	it("Completes tutorial", () => {
// 		cy.get("[data-cy=start-tutorial-button]").click()
// 		cy.contains("NEXT").click()
// 		cy.contains("CLICK HERE TO START A NEW CHANNEL ACCOUNT.")
// 		cy.contains("CREATE A NEW CHANNEL").click()
// 		cy.get("[name=displayNameInput]").type(tutorialChannel.displayName)
// 		cy.get("[data-cy=create-channel-button]").click()
// 		cy.contains("CLICK ON YOUR NEWLY CREATED CHANNEL.")
// 		cy.get(`[data-cy=${tutorialChannel.displayName}-channel-button]`).click()
// 		cy.contains("ADD A GAME.")
// 		cy.get("[data-cy=sidebar-add-game]").click()
// 		cy.get("[data-cy=warzone-button]").click()
// 		cy.contains("CLICK ON NEWLY ADDED GAME.")
// 		cy.get("[data-cy=warzone-sidebar-button]").click()
// 		cy.contains("ADD A KIT.")
// 		cy.contains("+ CREATE NEW").click()
// 		cy.contains("NEED SUPPORT? CLICK HELP.")
// 		cy.contains("LET'S GET KITTD").click()
// 	})
// })
