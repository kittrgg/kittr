/// <reference path="index.d.ts" />

import user from "../fixtures/login.json";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/dashboard");
  cy.contains("LOG IN");
  cy.get("[name=email]").type(user.email);
  cy.get("[name=password]").type(user.password);
  cy.get("[data-cy=login-button]").click();
  cy.get("[data-cy=your-channels-title]");
});

Cypress.Commands.add("logout", () => {
  cy.get("[data-cy=profile-container-button]").click();
  cy.get("[data-cy=logout-button]").click();
  cy.contains("get kittd.");
});

// Cypress.Commands.add("getToken", () => {
// 	return auth.currentUser?.getIdToken() as Promise<string>
// })
