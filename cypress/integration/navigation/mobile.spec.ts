describe("Mobile Navigation", () => {
  beforeEach(() => {
    console.log("DEBUG: 1");
    cy.visit("/");
    console.log("DEBUG: 2");
    cy.viewport("iphone-x");
    console.log("DEBUG: 3");
    cy.get("[data-cy=mobile-hamburger-icon]").click();
    console.log("DEBUG: 4");
  });

  it("Navigates to Games", () => {
    cy.get("[data-cy=mobile-games-link]").click();
    cy.location("pathname").should("include", "/games");
  });

  it("Navigates to Channels", () => {
    // Ignore redirects in dev environment
    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.get("[data-cy=mobile-channels-link]").click();
    cy.location("pathname").should("include", "/channels");
  });

  it("Navigates to Blog", () => {
    cy.get("[data-cy=mobile-blog-link]").click();
    cy.location("pathname").should("include", "/blog");
  });

  it("Navigates to Sign Up", () => {
    cy.get("[data-cy=mobile-sign-up-link]").click();
    cy.location("pathname").should("include", "/sign-up");
  });

  it("Navigates to Dashboard", () => {
    cy.get("[data-cy=mobile-dashboard-link-no-auth]").click();
    cy.location("pathname").should("include", "/dashboard");
  });
});

describe("Mobile Nav (Authentication)", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-x");
  });

  it("Navigates to Sign Up (No Auth)", () => {
    cy.get("[data-cy=mobile-hamburger-icon]").click();
    cy.get("[data-cy=mobile-sign-up-link]").click();
    cy.location("pathname").should("include", "/sign-up");
  });

  it("Navigates to Dashboard (No Auth)", () => {
    cy.get("[data-cy=mobile-hamburger-icon]").click();
    cy.get("[data-cy=mobile-dashboard-link-no-auth]").click();
    cy.location("pathname").should("include", "/dashboard");
  });

  // TODO: Particularly annoying to get correct...
  // it("Does not show Sign Up link (Authed)", () => {
  //   cy.login(user.email, user.password);
  //   cy.visit("/");
  //   cy.get("[data-cy=mobile-hamburger-icon]").click();
  //   cy.get("[data-cy=mobile-sign-up-link]").should("not.exist");
  // });

  // it("Navigates to Dashboard (Authed)", () => {
  //   cy.login(user.email, user.password);
  //   cy.get("[data-cy=mobile-hamburger-icon]").click();
  //   cy.get("[data-cy=mobile-dashboard-link-authed]").click();
  //   cy.location("pathname").should("include", "/dashboard");
  // });
});
