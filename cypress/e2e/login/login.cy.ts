import LoginPage from "../../pages/LoginPage";
import IndexPage from "../../pages/IndexPage";
import apiRoutes from "../../fixtures/apiRoutes.json";

describe("Login tests", () => {

  beforeEach(function(){
    cy.fixture("userData.json").then((user) => {
      this.userData = user;
    });
  })

  it("Login via UI", function() {
    cy.visit('/');
    IndexPage.clickLoginLink();
    LoginPage.login(this.userData.username, this.userData.password);
    IndexPage.validateLoggedUser(this.userData.username)
  });


  it("Login via API", function() {
    cy.loginViaApi(this.userData.username, this.userData.password)
    cy.intercept({
      method: apiRoutes.loginCheck.method,
      url: Cypress.env('apiUrl') + apiRoutes.loginCheck.url
    }).as('loginCheck')
    cy.visit('/')
    cy.wait('@loginCheck')
    IndexPage.validateLoggedUser(this.userData.username)
  })
});
