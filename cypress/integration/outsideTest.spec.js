import '../support/index.js';

describe('OUTSIDE PAGE TEST',()=> {
  it('test',()=> {
    cy.visitedOutsideURL()
    cy.get('.dropdown-toggle').click()
    cy.contains('Actions').click()
    cy.get('.action-email').type('example@gmail.com').should('have.value', 'example@gmail.com')
    cy.get('.action-focus').focus().should('have.class', 'focus').prev().contains('Password')
    cy.get('.action-blur').type('TEST').blur().prev().contains('Full Name').should('have.attr','style','color: red;')
    cy.get('.action-clear').type('clear field').should('have.value', 'clear field').clear().should('have.value', '')
    cy.get('.action-form').find('input').type('test text')
    cy.get('.action-form').submit().next().contains('Your form has been submitted!')
  })
})
