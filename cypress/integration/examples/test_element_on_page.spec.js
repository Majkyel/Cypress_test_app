context("TESTS FOR MY PAGE WITH ELEMENT", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("This is first example test", ()=> {
    cy.get('.AppParagraph').contains('This is element to testing by cypress !')
    cy.get('.OurElement').should('have.class', 'gqGwbH')
    cy.get('.OurElement').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('.OurElement').click()
    cy.get('.OurElement').should('have.class', 'ixFuJN')
    cy.get('.OurElement').should('have.css', 'background-color', 'rgb(0, 128, 0)')
    cy.get('.OurElement').click()
  })
});
