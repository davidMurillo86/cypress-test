import IndexPage from '../../pages/IndexPage'
import SignUpPage from '../../pages/SignUpPage'
import LoginPage from '../../pages/LoginPage'

describe('Sign up tests', () => {
  it('Sign up new user', () => {
    cy.visit('/')
    IndexPage.clickSignUpButton()
    SignUpPage.signUp()
  })

  it('Log in with created user', () => {
    IndexPage.clickLoginLink()
    LoginPage.login(SignUpPage.getUserName(), SignUpPage.getPassword())
    IndexPage.validateLoggedUser(SignUpPage.getUserName())
  })
})
