describe('template spec', () => {
  it('Deve conseguir fazer o login e assistir o filme em destaque', () => {
    cy.visit('/');
    cy.get('.styles_nav__UWkqw > div > :nth-child(1)').click()
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('123456');
    cy.get('.registerLogin_formBtn__qIboN').click();
    cy.get('.styles_button__APF2r').click();
    cy.get('.coursePage_courseBtn__cIscq').click();
    cy.get('video').click();
  })
})
export {}; // Isso resolve o erro TS1208