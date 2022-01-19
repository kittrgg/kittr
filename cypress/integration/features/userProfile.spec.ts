// /// <reference types="cypress" />

// describe("Desktop", () => {
//   beforeEach(() => {
//     cy.viewport("macbook-16");
//   });

//   it("Starts on default state with nothing selected", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.contains("SELECT A KIT.");
//   });

//   it("Selects a weapon on click and closes list", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=Automaton-placeholder-button]").click();
//     cy.location("search").should("eq", "?k=Automaton");
//     cy.contains("Automaton");
//   });

//   it("Shows a weapon", () => {
//     cy.visit("/channel/JoeWo/warzone?k=Automaton");
//     cy.contains("Automaton");
//     cy.contains("F8 STABILIZER");
//   });

//   it("Selects a weapon on click", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=Automaton-button]").click();
//     cy.location("search").should("eq", "?k=Automaton");
//     cy.get("[data-cy=Automaton-button]").should(
//       "have.css",
//       "background-color",
//       "rgb(99, 99, 99)"
//     );
//   });

//   it("Show all kit and profile information", () => {
//     cy.visit("/channel/JoeWo/warzone?k=Automaton");
//     cy.get("[data-cy=profile-image]");
//     cy.get("[data-cy=channel-name]");
//     cy.get("[data-cy=social-icons]");
//     cy.get("[data-cy=kit-options]");
//     cy.get("[data-cy=kit-imagery]");
//     cy.get("[data-cy=kit-popularity]");
//     cy.get("[data-cy=kit-stats]");
//     cy.get("[data-cy=kit-blurb]");
//   });

//   it("Can search list of kits", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=Automaton-button]").should("exist");
//     cy.get("[data-cy=Itra-Burst-button]").should("exist");
//     cy.get("[data-cy=search-input]").type("Automaton");
//     cy.get("[data-cy=Automaton-button]").should("exist");
//     cy.get("[data-cy=Krig-6-button]").should("not.exist");
//   });

//   it("Can clear search input", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=search-input]").type("Automaton");
//     cy.get("[data-cy=clear-search]").click();
//     cy.get("[data-cy=search-input]").should("have.value", "");
//   });

//   it("Shows variants when multiple for base", () => {
//     cy.visit("/channel/JoeWo/warzone?k=STG44");
//     cy.get("[data-cy=STG44-variants-container]")
//       .invoke("height")
//       .should("gte", 10);
//   });

//   it("Click to show second variant", () => {
//     cy.visit("/channel/JoeWo/warzone?weapon=Cooper-Carbine");
//     cy.get("[data-cy=Cooper-Carbine-Primary]").click();
//     cy.contains("MX SILENCER");
//     cy.contains('22" COOPER CUSTOM');
//     cy.contains("G16 2.5X");
//     cy.contains("COOPER 45W");
//     cy.contains("M1941 HAND STOP");
//   });

//   it("Shows the Not Found page when a player doesn't exist", () => {
//     cy.visit("/channel/thereisnochannelhere");
//     cy.contains("Sorry, but we aren't seeing this channel on kittr.");
//   });
// });

// describe("Mobile", () => {
//   beforeEach(() => {
//     cy.viewport("iphone-x");
//   });

//   it("Starts on default state with nothing selected", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.contains("SELECT A KIT.");
//     cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0);
//   });

//   it("Selects a weapon on click and closes list", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=Automaton-placeholder-button]").click();
//     cy.location("search").should("eq", "?k=Automaton");
//     cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0);
//     cy.contains("Automaton");
//   });

//   it("Shows a weapon", () => {
//     cy.visit("/channel/JoeWo/warzone?k=Automaton");
//     cy.contains("Automaton");
//     cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0);
//   });

//   it("Opens the kit list", () => {
//     cy.visit("/channel/JoeWo/warzone?k=Automaton");
//     cy.get("[data-cy=kit-list-opener]").click();
//     cy.get("[data-cy=kit-list]").invoke("width").should("gte", 10);
//   });

//   it("Selects a weapon on click and closes list", () => {
//     cy.visit("/channel/JoeWo/warzone");
//     cy.get("[data-cy=kit-list-opener]").click();
//     cy.get("[data-cy=Automaton-button]").click();
//     cy.location("search").should("eq", "?k=Automaton");
//     cy.get("[data-cy=kit-list]").invoke("width").should("eq", 0);
//   });

//   it("Click to show second variant using slider", () => {
//     cy.visit("/channel/JoeWo/warzone?weapon=Cooper-Carbine");
//     cy.get("[data-cy=slider-Cooper-Carbine-SMG]").click();
//     cy.contains("RECOIL BOOSTER");
//     cy.contains('22" COOPER CUSTOM');
//     cy.contains("SLATE REFLECTOR");
//     cy.contains("REMOVED STOCK");
//     cy.contains("MARK VI SKELETAL");
//   });

//   it("Click to show second variant using Kit List", () => {
//     cy.visit("/channel/JoeWo/warzone?weapon=Cooper-Carbine");
//     cy.get("[data-cy=kit-list-opener]").click();
//     cy.get("[data-cy=Cooper-Carbine-SMG]").click();
//     cy.contains("RECOIL BOOSTER");
//     cy.contains('22" COOPER CUSTOM');
//     cy.contains("SLATE REFLECTOR");
//     cy.contains("REMOVED STOCK");
//     cy.contains("MARK VI SKELETAL");
//   });
// });
