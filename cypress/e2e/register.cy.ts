describe('template spec', () => {
    it('Deve conseguir se cadastrar corretamente', () => {
        cy.visit('/');
        cy.get('.styles_btnCta__mIaxb').click();
        cy.get('#firstName').type('João');
        cy.get('#lastName').type('Test');
        cy.get('#phone').type('123456789');
        cy.get('#email').type('test@test.com');
        cy.get('#birth').type('2000-01-01');
        cy.get('#password').type('123456');
        cy.get('#confirmPassword').type('123456');
        cy.get('.registerLogin_formBtn__qIboN').click();
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('123456');
        cy.get('.registerLogin_formBtn__qIboN').click();
    })
})
export {}; // Isso resolve o erro TS1208