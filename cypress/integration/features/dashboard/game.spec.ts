// /// <reference types="cypress" />

// import user from "../../../fixtures/login.json";
// import channel from "../../../fixtures/mongoose/channel.json";
// import channelList from "../../../fixtures/managerChannelList.json";
// import managers from "../../../fixtures/managers.json";

// describe("Games & Kits Actions", () => {
//   before(() => {
//     cy.request("POST", "/api/admin/cypress/user");

//     cy.request("POST", "/api/admin/cypress/seedDatabase");
//   });

//   beforeEach(() => {
//     cy.intercept("GET", "http://api:5000").as("socket");
//     cy.intercept("https://www.googleapis.com/identitytoolkit/**", (req) =>
//       req.reply("")
//     ).as("auth mocks only");
//     cy.intercept("/api/manager/getInfo?uid=*", (req) =>
//       req.reply(managers[req.query.uid])
//     ).as("getManagerInfo");
//     cy.intercept("/api/manager", channelList).as("api/manager");
//     cy.visit("/dashboard");
//     cy.viewport("macbook-16");
//     cy.login(user.email, user.password);
//     cy.get("[data-cy=thetestchannel-channel-button]").click();
//   });

//   it("Removes game from channel", () => {
//     cy.intercept("GET", "/api/channel**").as("getChannelData");
//     cy.get("[data-cy=warzone-sidebar-button]").trigger("mouseover");
//     cy.get("[data-cy=warzone-sidebar-button]").trigger("mouseenter");
//     cy.get("[data-cy=warzone-delete-sidebar-button]").click();
//     cy.get("[data-cy=delete-game-button]").click();
//     cy.wait("@getChannelData");
//     cy.get("[data-cy=warzone-sidebar-button]").should("not.exist");
//   });

//   it("Adds a game to channel", () => {
//     cy.get("[data-cy=sidebar-add-game]").click();
//     cy.get("[data-cy=warzone-button]").click();
//     cy.get("[data-cy=warzone-sidebar-button]");
//   });

//   it("Edits creator code", () => {
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.get("[data-cy=edit-creator-code]").click();
//     cy.get("[data-cy=creator-code-input]").type("testcreatorcode").blur();
//     cy.contains("testcreatorcode");
//     cy.get("[data-cy=edit-creator-code]").click();
//     cy.get("[data-cy=creator-code-input]").focus().clear().blur();
//     cy.contains("testcreatorcode").should("not.exist");
//   });

//   it("Creates first kit", () => {
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.get("[data-cy=create-first-kit]").click();
//     cy.get(".choose-kit-base").click();
//     cy.contains("EM2").click();
//     cy.get("[data-cy=toggler-value-0]").click();
//     cy.get("[name=youtubeUrl]").type("testuri");
//     cy.get("[name=customTitle]").type("tester title");
//     cy.get(".Muzzle-selector").click();
//     cy.contains("Agency Suppressor").click();
//     cy.get(".Barrel-selector").click();
//     cy.contains('25.8" Task Force').click();
//     cy.get(".Laser-selector").click();
//     cy.contains("Tiger Team Spotlight").click();
//     cy.get(".Stock-selector").click();
//     cy.contains("CQB Pad").click();
//     cy.get(".Rear-Grip-selector").click();
//     cy.contains("Speed Tape").click();
//     cy.get("[name=blueprint]").type("test blueprint");
//     cy.get("[name=channelQuote]").type(
//       "totally just a test quote to make sure this works."
//     );
//     cy.get("[data-cy=save-kit-button]").click();
//     cy.contains("EM2 (tester title)");
//   });

//   it("Quick exports command", () => {
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.get("[data-cy=EM2-quick-export]").click();
//     cy.get("[data-cy=user-toggle] > [data-cy=toggler-value-1]").click();
//     cy.get("[data-cy=command-toggle] > [data-cy=toggler-value-1]").click();
//     cy.contains(`!addcom !em2`);
//     cy.contains(`/c/${channel.urlSafeName}/warzone/?k=EM2`);
//   });

//   it("Exports bot commands", () => {
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.contains("EXPORT BOT COMMANDS").click();
//     cy.contains(`!editcom !loadout $(touser)`);
//     cy.get("[data-cy=user-toggle] > [data-cy=toggler-value-1]").click();
//     cy.contains(`!editcom !loadout`);
//     cy.contains(`/c/${channel.urlSafeName}/warzone`);
//     cy.get("[data-cy=custom-text-builder]")
//       .clear()
//       .type("{{link}} is the best kit", { parseSpecialCharSequences: false });
//     cy.get("[data-cy=save-custom-string]").click();
//     cy.contains(`!editcom !loadout`);
//     cy.contains(`/c/${channel.urlSafeName}/warzone is the best`);
//     cy.get("[data-cy=custom-text-builder]").clear();
//     cy.get("[data-cy=save-custom-string]").click();
//   });

//   it("Deletes kit", () => {
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.contains("EM2 (tester title)").click();
//     cy.get("[data-cy=trash-can]").click();
//     cy.contains("YES, REMOVE FROM KITS").click();
//     cy.contains("EM2");
//   });
// });
