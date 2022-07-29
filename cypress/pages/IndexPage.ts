class IndexPage {
  private loginLink: string = "#login2";
  private loggedUser: string = "#nameofuser";
  private signUpButton: string = "#signin2";

  public clickLoginLink() {
    cy.get(this.loginLink).click();
  }

  public validateLoggedUser(username: string) {
    cy.get(this.loggedUser)
      .should("be.visible")
      .and("have.text", `Welcome ${username}`);
  }

  public selectCategory(category: string) {
    cy.contains(category).click();
  }

  public selectItem(item: string) {
    cy.contains(item).click();
  }

  public clickCartButton() {
    cy.contains("Cart").click();
  }

  public clickSignUpButton() {
    cy.get(this.signUpButton).click();
  }
}
export default new IndexPage();
