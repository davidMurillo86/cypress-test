import { faker } from "@faker-js/faker";
import apiRoutes from "../fixtures/apiRoutes.json";

class SignUpPage {
  private username: string = "#sign-username";
  private password: string = "#sign-password";
  private signUpButton: string = ".btn-primary";
  private user: string = "";
  private userPass: string = "";

  private setUsername(username: string) {
    cy.get(this.username).as("username");
    cy.get("@username").clear().type(username);
  }

  private setPassword(password: string) {
    cy.get(this.password).as("password");
    cy.get("@password").clear().type(password);
  }

  public clickSignUpButton() {
    cy.get(this.signUpButton).contains("Sign up").click();
  }

  private generateUser() {
    this.user = faker.internet.userName();
    this.userPass = faker.internet.password();
    cy.log("Generating user: " + this.user + " pass:" + this.userPass);
  }

  public getUserName() {
    return this.user;
  }

  public getPassword() {
    return this.userPass;
  }

  public signUp() {
    this.generateUser();
    this.setUsername(this.user);
    this.setPassword(this.userPass);
    cy.intercept({
      method: apiRoutes.signUp.method,
      url: Cypress.env("apiUrl") + apiRoutes.signUp.url,
    }).as("signUp");
    this.clickSignUpButton();
    cy.wait("@signUp").its("response.statusCode").should("eq", 200);
  }
}
export default new SignUpPage();
