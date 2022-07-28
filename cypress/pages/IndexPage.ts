
class IndexPage{
    private loginLink: string = '#login2'
    private loggedUser: string = "#nameofuser"


    public clickLoginLink(){
        cy.get(this.loginLink).click();
    }

    public validateLoggedUser(username: string){
        cy.get(this.loggedUser).should("be.visible").and("have.text", `Welcome ${username}`)
    }
}
export default new IndexPage()