describe("Admin Can Login", () => {
    it("Login page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should("have.text","Username");
        cy.get(':nth-child(3) > .col-md-4').should("have.text","Password");
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("test1");
        cy.get('#password').type("testtest1");
        cy.get('.btn-primary').click();
        cy.get('h2').should("have.text","Selamat Datang , test1");
        cy.get(':nth-child(3) > .nav-link').click();

        //Tambah Kategori
        cy.get('.float-right > .btn').click();
        cy.get('.card-header').contains("Tambah Kategori");
        cy.get('#nama_kategori').click();
        cy.get('#nama_kategori').type("Test Add Kategori");
        cy.get('.btn').click();
        //Edit Kategori
        cy.get(':nth-child(5) > :nth-child(2) > form > .btn-primary').contains("Edit");
        cy.get(':nth-child(5) > :nth-child(2) > form > .btn-primary').click();
        cy.get('#nama_kategori').click();
        cy.get('#nama_kategori').clear();
        cy.get('#nama_kategori').type("Edit Sukses2");
        cy.get('.btn').click();

        //Delete
        cy.get(':nth-child(4) > :nth-child(2) > form > .btn-danger').click();

        //Show
        cy.get(':nth-child(2) > :nth-child(2) > form > .btn-info').click();
        cy.get('.btn').click();



    })
});

describe("Admin Can Tambah Kategori", () => {
    it("Login page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should("have.text","Username");
        cy.get(':nth-child(3) > .col-md-4').should("have.text","Password");
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("test1");
        cy.get('#password').type("testtest1");
        cy.get('.btn-primary').click();
        cy.get('h2').should("have.text","Selamat Datang , test1");
        cy.get(':nth-child(3) > .nav-link').click();

        //Tambah Kategori
        cy.get('.float-right > .btn').click();
        cy.get('.card-header').contains("Tambah Kategori");
        cy.get('#nama_kategori').click();
        cy.get('#nama_kategori').type("Test Add Kategori");
        cy.get('.btn').click();
       
    })
});


describe("Admin Can Edit Kategori", () => {
    it("Login page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should("have.text","Username");
        cy.get(':nth-child(3) > .col-md-4').should("have.text","Password");
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("test1");
        cy.get('#password').type("testtest1");
        cy.get('.btn-primary').click();
        cy.get('h2').should("have.text","Selamat Datang , test1");
        cy.get(':nth-child(3) > .nav-link').click();

       
        //Edit Kategori
        cy.get(':nth-child(5) > :nth-child(2) > form > .btn-primary').contains("Edit");
        cy.get(':nth-child(5) > :nth-child(2) > form > .btn-primary').click();
        cy.get('#nama_kategori').click();
        cy.get('#nama_kategori').clear();
        cy.get('#nama_kategori').type("Edit Sukses2");
        cy.get('.btn').click();



    })
});


describe("Admin Can Delete Category", () => {
    it("Login page can be open and have correct specification", () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should("have.text","Username");
        cy.get(':nth-child(3) > .col-md-4').should("have.text","Password");
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("test1");
        cy.get('#password').type("testtest1");
        cy.get('.btn-primary').click();
        cy.get('h2').should("have.text","Selamat Datang , test1");
        cy.get(':nth-child(3) > .nav-link').click();


        //Delete
        cy.get(':nth-child(4) > :nth-child(2) > form > .btn-danger').click();

    })
});



