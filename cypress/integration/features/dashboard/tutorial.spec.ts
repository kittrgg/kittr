// /// <reference types="cypress" />

// import user from "../../../fixtures/tutorial-login.json";
// import tutorialChannel from "../../../fixtures/tutorial-channel.json";
// import managers from "../../../fixtures/managers.json";

// describe("Dashboard Tutorial", () => {
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
//     cy.visit("/dashboard");
//     cy.viewport("macbook-16");
//   });

//   it('Close tutorial using "Skip Tour" button', () => {
//     cy.intercept("/api/manager", []).as("api/manager");
//     cy.login(user.email, user.password);
//     cy.get("[data-cy=start-tutorial-button]").click();
//     cy.contains("SKIP TOUR").click();
//   });

//   it('Close tutorial using "X"', () => {
//     cy.intercept("/api/manager", []).as("api/manager");
//     cy.login(user.email, user.password);
//     cy.get("[data-cy=start-tutorial-button]").click();
//     cy.get("[data-cy=modal-x-close]").click();
//   });

//   it("Completes tutorial", () => {
//     cy.login(user.email, user.password);
//     cy.get("[data-cy=start-tutorial-button]").click();
//     cy.contains("NEXT").click();
//     cy.contains("CLICK HERE TO START A NEW CHANNEL ACCOUNT.");
//     cy.contains("CREATE A NEW CHANNEL").click();
//     cy.get("[name=displayName]").type(tutorialChannel.displayName);
//     cy.get("[data-cy=create-channel-button]").click();
//     cy.contains("CLICK ON YOUR NEWLY CREATED CHANNEL.");
//     cy.get(`[data-cy=${tutorialChannel.displayName}-channel-button]`).click();
//     cy.contains("ADD A GAME.");
//     cy.get("[data-cy=sidebar-add-game]").click();
//     cy.get("[data-cy=warzone-button]").click();
//     cy.contains("CLICK ON NEWLY ADDED GAME.");
//     cy.get("[data-cy=warzone-sidebar-button]").click();
//     cy.contains("ADD A KIT.");
//     cy.contains("+ CREATE NEW").click();
//     cy.contains("NEED SUPPORT? CLICK HELP.");
//     cy.contains("LET'S GET KITTD").click();
//   });
// });
