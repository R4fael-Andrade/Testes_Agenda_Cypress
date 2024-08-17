/// <reference types="cypress" />

describe('Testes para a página agenda de contatos da ebac', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    })
    it('Testando a funcionalidade de inclusão', () => {
        cy.get('input[type=text]').type('Rafael Sousa')
        cy.get('input[type=email]').type('rafael.teste@gmail.com')
        cy.get('input[type=tel]').type('40028922')
        cy.get('.adicionar').click()
        cy.get(':last-child() > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('have.text', '40028922')
    }) 
    it('Testando a funcionalidade de alteracao', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type=text]').clear()
        cy.get('input[type=text]').type('Giordana')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Giordana')
    })
    it('Testando a funcionalidade de deletar', () => {
        cy.get(':last-child() > .sc-gueYoa > .delete').click()
        cy.get('.sc-dmqHEX').should('not.have.text', 'Rafael Sousa')
    })
})