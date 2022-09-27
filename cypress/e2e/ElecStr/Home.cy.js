
describe("User Can Open Home Page", () => {
    it("Home page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(':nth-child(1) > .nav-link').should("have.text","Home");
        cy.get(':nth-child(2) > .nav-link').should("have.text","List Produk");
        cy.get(':nth-child(3) > .nav-link').should("have.text","Login");
        cy.get(':nth-child(4) > .nav-link').should("have.text","Register");
        
        

    });
});


// .contains("Login").and("be.enabled");