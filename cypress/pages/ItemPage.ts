import apiRoutes from "../fixtures/apiRoutes.json";

class ItemPage {
  private itemName: string = ".name";

  public validateItemName(itemName: string) {
    cy.get(this.itemName).should(($item) => {
      let text = $item.text().replace("\n", "");
      expect(text).to.be.eq(itemName);
    });
  }

  public clickAddToCart() {
    cy.intercept({
      method: apiRoutes.addToCart.method,
      url: Cypress.env("apiUrl") + apiRoutes.addToCart.url,
    }).as("addToCart");
    cy.contains("Add to cart").click();
    cy.wait("@addToCart").its("response.statusCode").should("eq", 200);
    cy.on("window:confirm", () => true);
  }
}
export default new ItemPage();
