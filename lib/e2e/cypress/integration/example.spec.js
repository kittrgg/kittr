describe("The Home Page", () => {
  it("renders", () => {
    cy.visit("/");
    cy.contains("Your dog's sporting event, simplified.");
  });
});
