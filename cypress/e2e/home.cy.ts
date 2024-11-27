describe('Página inicial', () => {
    it('Deve carregar a página inicial com o título correto', () => {
        cy.visit('/');  // A URL será resolvida com base na baseUrl configurada
        cy.title().should('eq', 'DevFlix');
    });
});
export {}; // Isso resolve o erro TS1208