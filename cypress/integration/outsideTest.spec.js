import '../support/index.js';

describe('OUTSIDE PAGE TEST',()=> {
  it('test',()=> {
    cy.visitedOutsideURL()
    cy.get('.dropdown-toggle').click({force: true})
    cy.contains('Actions').click({force: true})
    cy.get('.action-email').type('example@gmail.com').should('have.value', 'example@gmail.com')
    cy.get('.action-focus').focus().should('have.class', 'focus').prev().contains('Password')
    cy.get('.action-blur').type('TEST').blur().prev().contains('Full Name').should('have.attr','style','color: red;')
    cy.get('.action-clear').type('clear field').should('have.value', 'clear field').clear().should('have.value', '')
    cy.get('.action-form').find('input').type('test text').should('have.value', 'test text')
    cy.get('.action-form').submit().next().contains('Your form has been submitted!').should('contain', 'Your form has been submitted!')
    cy.get('[data-original-title="Popover"]').click().next().should('contain','This popover shows up on click')
    cy.get('#action-canvas').should('be.visible')
      .click('center')
      .click('topLeft')
      .click('bottomRight')
      .click('left')
      .click('right')
    cy.get('.action-labels > .label').should('have.length', 6).click({multiple: true}).next().should('contain', 'clicked')
    cy.get('.action-opacity').children().should('contain', "I'm being covered").and('be.visible', '.opacity-cover')
  })
})
