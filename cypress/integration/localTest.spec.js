import '../support/index.js';

describe('LOCALHOST TEST',()=> {
  it('test', ()=> {
    cy.visitedLocalURL()
    cy.get('.AppParagraph').contains('This is element to testing by cypress !')
    cy.get('.OurElement').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('.OurElement').click()
    cy.get('.OurElement').should('have.css', 'background-color', 'rgb(0, 128, 0)')
    cy.get('.OurElement').click()
  })
})
