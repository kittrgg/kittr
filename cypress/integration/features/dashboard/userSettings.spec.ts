/// <reference types="cypress" />

import { v4 as uuid } from "uuid";
import user from "../../../fixtures/login.json";

describe("User Settings", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
    cy.viewport("macbook-16");
  });

  it("Changes display name", () => {
    cy.login(user.email, user.password);
    cy.get("[data-cy=user-settings-button]").click();
    cy.get("[name=displayName]").focus().clear().type(uuid());
    cy.get("[data-cy=confirm-name-change]").click();
    cy.get("[data-cy=confirm-name-change]").should("be.disabled");
  });
});
