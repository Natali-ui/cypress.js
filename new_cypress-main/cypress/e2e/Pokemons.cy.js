import * as data from "../helpers/default_data.json"

describe('Битва Покемонов', function () {
    
       it('Покупка нового автара', function () {
        cy.visit('https://pokemonbattle.ru/login'); 
        cy.get(':nth-child(1) > .auth__input').type(data.login);
        cy.get('#password').type(data.password);
        cy.get('.auth__button').click();
        cy.wait(2000);
        cy.get('.header__id-texts').click();
        cy.get('[href="/shop"]') .click();
        cy.get('.available > button').first().click({ force: true });
        cy.wait(2000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4006800900962514');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0330');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2') .type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2') .type('NATALI DALI');
        cy.get('.pay-btn') .click();
        cy.get('#cardnumber') .type('56456');
        cy.get('.payment__submit-button') .click();
        cy.get('.payment__padding') .contains('Покупка прошла успешно');
    })
    })