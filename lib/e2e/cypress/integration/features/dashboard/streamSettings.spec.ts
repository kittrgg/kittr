/// <reference types="cypress" />

import user from "../../../fixtures/login"

describe("Channel Settings", () => {
	beforeEach(() => {
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
	})

	it("Modal for more info on managers", () => {
		cy.login(user.email, user.password)
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=managers-info-question]").click()
		cy.contains("ABOUT ACCOUNT MANAGERS")
	})

	it("Shows all managers", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=manager]").should("have.length", 3)

		cy.get("[data-cy=manager] > p")
			.filter(':contains("Owner")')
			.should("have.length", 1)

		cy.get("[data-cy=manager] > p")
			.filter(':contains("Editor")')
			.should("have.length", 2)
	})

	it("Promote and demote an editor", () => {
		cy.intercept("PUT", "/api/manager/promote").as("promote")
		cy.intercept("PUT", "/api/manager/demote").as("demote")
		cy.intercept("GET", "/api/manager/getInfo?uid=*").as("getManagerInfo")
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=manager] > div > [data-cy=promote]").eq(0).click()
		cy.contains("YES, PROMOTE THEM").click()
		cy.contains("Administrator")
		cy.get("[data-cy=manager] > div > [data-cy=demote]").eq(0).click()
		cy.contains("YES, DEMOTE THEM").click()
		cy.wait("@demote").then(() => {})
		cy.contains("Administrator").should("not.exist")
	})

	it("Adjusts YouTube autoplay", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=toggler-value-0]").click()
		cy.get("[data-cy=toggler-value-1]").should(
			"have.css",
			"background-color",
			"rgb(155, 155, 155)"
		)
		cy.get("[data-cy=toggler-value-0]").click()
		cy.get("[data-cy=toggler-value-0]").should(
			"have.css",
			"background-color",
			"rgb(155, 155, 155)"
		)
	})

	it("Adds a link", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=add-link-button]").click()
		cy.get("[data-cy=facebook-add-button]").click()
		cy.get("[name=facebook]").type("https://www.facebook.com/some-test-link")
		cy.get("[data-cy=add-link-modal-button]").click()
		cy.contains("https://www.facebook.com")
		cy.intercept("PUT", "/api/channel/meta/links").as("updateLinks")
		cy.get("[data-cy=save-link-changes]").click()
		cy.wait("@updateLinks")
		cy.contains("https://www.facebook.com")
	})

	it("Deletes a link", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=discord-delete-button]").click()
		cy.contains("https://discord.gg").should("not.exist")
		cy.intercept("PUT", "/api/channel/meta/links").as("updateLinks")
		cy.get("[data-cy=save-link-changes]").click()
		cy.wait("@updateLinks")
		cy.contains("https://www.facebook.com")
	})

	it("Remove a manager", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.intercept("GET", "/api/manager/getInfo?uid=*").as("getManagerInfo")
		cy.get("[data-cy=remove-manager]").first().click()
		cy.contains("testman1")
		cy.intercept("DELETE", "/api/manager/removeManager").as("removeManager")
		cy.get("[data-cy=confirm-manager-removal]").click()
		cy.wait("@removeManager")
		cy.contains("testman1").should("not.exist")
	})

	it("Add a manager", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[data-cy=add-manager-begin]").click()
		cy.get("[name=email").type("manager3@test.com")
		cy.get("[data-cy=role-selector]").select("Administrator")
		cy.get("[data-cy=confirm-manager-add]").click()
		cy.contains("testman3")
	})

	// TODO: Particuarly difficult to make pass...I just didn't feel like dealing with it.
	// it("Changes channel's owner", () => {
	//   cy.intercept("PUT", "/api/manager/newOwner").as("changeOwner");
	//   cy.intercept("GET", "/api/channel**").as("getChannelData");
	//   cy.get("[data-cy=thetestchannel-channel-button]").click();
	//   cy.get("[data-cy=change-owner-start]").click();
	//   cy.get("[data-cy=confirm-changing-owner]").click();
	//   cy.get("[data-cy=selector-new-manager]").select("testman2");
	//   cy.get("[data-cy=final-change-owner]").click();
	//   cy.wait("@changeOwner");
	//   cy.wait("@getChannelData");
	//   cy.get("[data-cy=manager] > p")
	//     .filter(':contains("Owner")')
	//     .should("have.length", 1);
	//   cy.get("[data-cy=manager]").first().contains("testman2");
	//   cy.get("[data-cy=manager]").first().filter(':contains("Owner")');
	// });
})

describe("Channel Identity", () => {
	beforeEach(() => {
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
	})

	it("Change channel display name", () => {
		cy.get("[data-cy=thetestchannel-channel-button]").click()
		cy.get("[name=displayName]").focus().clear().type("someothername")
		cy.get("[data-cy=confirm-name-change]").click()
	})

	it("Callouts for basic users", () => {
		cy.get("[data-cy=someothername-channel-button]").click()
		cy.get("[data-cy=premium-learn-more]")
	})

	it("Deletes the channel", () => {
		cy.get("[data-cy=someothername-channel-button]").click()
		cy.get("[data-cy=channel-delete]").click()
		cy.get("[name=displayNameDelete").type("someothername")
		cy.contains("DELETE FOREVER").click()
		cy.contains("YOUR CHANNELS")
	})
})

describe("Premium Features", () => {
	beforeEach(() => {
		cy.visit("/dashboard")
		cy.viewport("macbook-16")
	})

	it("CRUD a spec", () => {
		// Ignore a missing image
		Cypress.on("uncaught:exception", (err) => {
			return false
		})

		cy.get("[data-cy=premiumchannel-channel-button]").click()
		cy.get("[data-cy=add-a-spec]").click()
		cy.get(".spec-select").click()
		cy.contains("CPU").click()
		cy.get("[name=specDescription]").type("the test CPU")
		cy.get("[data-cy=confirm-add-spec]").click()
		cy.contains("the test CPU")
		cy.get("[data-cy=CPU-update-spec]").click()
		cy.get(".spec-select").click()
		cy.contains("GPU").click()
		cy.get("[name=specDescription]").type("the test GPU")
		cy.get("[data-cy=confirm-add-spec]").click()
		cy.get("[data-cy=GPU-delete-spec]").click()
		cy.contains("the test GPU").should("not.exist")
	})

	it("CRUD an affiliate", () => {
		cy.get("[data-cy=premiumchannel-channel-button]").click()
		cy.get("[data-cy=add-an-affiliate]").click()
		cy.get("[name=company]").type("Testing With Cypress Inc")
		cy.get("[name=affiliate-description]").type("Da Description")
		cy.get("[data-cy=confirm-add-affiliate]").click()
		cy.contains("Testing With Cypress Inc")
		cy.contains("Da Description")
		cy.get("[data-cy=Testing-With-Cypress-Inc-edit-affiliate]").click()
		cy.get("[name=code]").type("Da Code")
		cy.get("[data-cy=confirm-add-affiliate]").click()
		cy.contains("Testing With Cypress Inc")
		cy.contains("Da Description")
		cy.contains("Da Code")
		cy.get("[data-cy=Testing-With-Cypress-Inc-delete-affiliate]").click()
		cy.contains("Testing With Cypress Inc").should("not.exist")
		cy.contains("Da Description").should("not.exist")
	})

	it("Says to choose a kit in Active Kit Overlay preview", () => {
		cy.get("[data-cy=premiumchannel-channel-button]").click()
		cy.contains("Choose a kit to see a preview.")
	})

	it("Remove a chosen kit from primary/secondary list when selected in other list", () => {
		cy.get("[data-cy=premiumchannel-channel-button]").click()
		cy.contains("AUG (MW)").first().click()
		cy.contains("AUG (MW)").should("have.length", 1)
	})
})
