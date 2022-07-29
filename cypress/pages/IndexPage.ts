class IndexPage {
  private loginLink: string = '#login2'
  private loggedUser: string = '#nameofuser'
  private signUpButton: string = '#signin2'

  public clickLoginLink() {
    cy.get(this.loginLink).should('be.visible').click()
  }

  public validateLoggedUser(username: string) {
    cy.get(this.loggedUser)
      .should('be.visible')
      .and('have.text', `Welcome ${username}`)
  }

  public selectCategory(category: string) {
    cy.contains(category).should('be.visible').click()
  }

  public selectItem(item: string) {
    cy.contains(item).should('be.visible').click()
  }

  public clickCartButton() {
    cy.contains('Cart').should('be.visible').click()
  }

  public clickSignUpButton() {
    cy.get(this.signUpButton).should('be.visible').click()
  }
}
export default new IndexPage()
