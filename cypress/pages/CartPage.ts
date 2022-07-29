class CartPage {
  public validateCartItem(itemName: string) {
    cy.contains(itemName).should("be.visible");
  }
}
export default new CartPage();
