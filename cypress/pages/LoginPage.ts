class LoginPage {
  private username: string = '#loginusername'
  private password: string = '#loginpassword'
  private loginBtn: string = '.btn-primary'

  private setUsername(username: string) {
    cy.get(this.username).as('user').should('exist')
    cy.get('@user')
      .clear()
      .type(username, { delay: 0 })
      .should('have.value', username)
  }

  private setPassword(password: string) {
    cy.get(this.password).as('password').should('exist')
    cy.get('@password')
      .clear()
      .type(password, { delay: 0 })
      .should('have.value', password)
  }

  private clickLoginButton() {
    return cy.get(this.loginBtn).contains('Log in').click()
  }

  public login(username: string, password: string) {
    this.setUsername(username)
    this.setPassword(password)
    this.clickLoginButton()
  }
}
export default new LoginPage()
