describe("User Can Open Login Page", () => {
    it("Login page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should("have.text","Username");
        cy.get(':nth-child(3) > .col-md-4').should("have.text","Password");
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("test1");
        cy.get('#password').type("testtest1");
        cy.get('.btn-primary').click();
        // cy.get('h2').contains("Selamat Datang");
    })
});