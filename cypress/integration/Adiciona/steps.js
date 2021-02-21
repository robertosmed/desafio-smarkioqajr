/// <reference types = "cypress" />

Given(/^que acesso o site Futfanatics$/, () => {
	cy.visit('https://www.futfanatics.com.br');
});

When(/^busco por Camisa do Brasil e pressiono Enter$/, () => {
    cy.get('input#search-field').type('Camisa do Brasil');
    cy.get('button.order-last.order-lg-0').click();
});

Then(/^exibe uma lista de resultados para Camisa do Brasil$/, () => {
    cy.get('div#neemu-breadcrumb span.breadcrumb-item')
            .should('contain.text', 'Você pesquisou por: Camisa do Brasil');
});

When(/^escolho Camisa Brasil CBF Basic Amarela$/, () => {
    cy.contains('Camisa Brasil CBF Basic Amarela').click({force: true});
});

When(/^escolho Tamanho G e clico em Comprar$/, () => {
    cy.get('div#cor_1189790').click({force:true});
    cy.get('button#button-buy').click({force: true});
});

Then(/^exibe produto ao Meu carrinho com sucesso$/, () => {
    cy.contains('Meu Carrinho').should('be.visible');
});




