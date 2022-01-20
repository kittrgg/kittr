/// <reference types="cypress" />

import user from "../../../fixtures/login.json";
import newChannel from "../../../fixtures/mongoose/newChannel.json";

describe("Channel List View (STUBS)", () => {
  beforeEach(() => {
    cy.intercept("https://www.googleapis.com/identitytoolkit/**", (req) =>
      req.reply("")
    ).as("auth mocks only");
    cy.logout();
    cy.login(user.email, user.password);
    cy.visit("/dashboard");
    cy.viewport("macbook-16");
  });

  it("Renders", () => {
    cy.contains("thetestchannel");
  });

  it("Opens a channel", () => {
    cy.get("[data-cy=thetestchannel-channel-button]").click();
    cy.get("[data-cy=loading-channel]");
  });

  it("Disallow similar named channels", () => {
    cy.get("[data-cy=create-new-channel]").click();
    cy.get("[name=displayName").type("anthonysheww");
    cy.get("[data-cy=create-channel-button]").click();
    cy.contains("That name is too similar to another channel");
  });

  it("Creates a new channel", () => {
    cy.get("[data-cy=create-new-channel]").click();
    cy.get("[name=displayName").type(newChannel.displayName);
    cy.get("[data-cy=create-channel-button]").click();
    cy.get(`[data-cy=${newChannel.displayName}-channel-button]`);
  });

  it("Reloads the channel list", () => {
    cy.get("[data-cy=anthonysheww-channel-button]");
    cy.get("[data-cy=renew-svg]").click();
    cy.get("[data-cy=anthonysheww-channel-button]");
  });
});
