import { faker } from '@faker-js/faker'
import apiRoutes from '../fixtures/apiRoutes.json'

class SignUpPage {
  private username: string = '#sign-username'
  private password: string = '#sign-password'
  private signUpButton: string = '.btn-primary'
  private user: string = ''
  private userPass: string = ''

  set setUsername(username: string) {
    cy.get(this.username).as('username')
    cy.get('@username')
      .clear()
      .type(username, { delay: 0 })
      .should('have.value', username)
  }

  set setPassword(password: string) {
    cy.get(this.password).as('password')
    cy.get('@password')
      .clear()
      .type(password, { delay: 0 })
      .should('have.value', password)
  }

  public clickSignUpButton() {
    cy.get(this.signUpButton).contains('Sign up').click()
  }

  private generateUser() {
    this.user = faker.internet.userName()
    this.userPass = faker.internet.password()
    cy.log('Generating user: ' + this.user + ' pass:' + this.userPass)
  }

  get getUserName(): string {
    return this.user
  }

  get getPassword(): string {
    return this.userPass
  }

  public signUp() {
    this.generateUser()
    this.setUsername = this.username
    this.setPassword = this.userPass
    cy.intercept({
      method: apiRoutes.signUp.method,
      url: apiRoutes.signUp.url,
      hostname: Cypress.env('apiHostName'),
      https: true,
    }).as('signUp')
    this.clickSignUpButton()
    cy.wait('@signUp').its('response.statusCode').should('eq', 200)
  }
}
export default new SignUpPage()
