/// <reference types = "cypress" />

context('Adicionar', () => {

    it('Adicionar produto ao carrinho a partir de uma busca', () => {
         // baseUrl
        cy.visit('https://www.futfanatics.com.br');
    

        //type
        cy.get('input#search-field').type('Camisa do Brasil');
        //lupa
        cy.get('button.order-last.order-lg-0').click();

        //validar o retorno da pesquisa
        cy.get('div#neemu-breadcrumb span.breadcrumb-item')
            .should('contain.text', 'Você pesquisou por: Camisa do Brasil');
            
        //produto selecionado
        cy.contains('Camisa Brasil CBF Basic Amarela').click({force: true});

        //Tamanho selecionado
        cy.get('div#cor_1189790').click({force:true});
        //button comprar
        cy.get('button#button-buy').click({force: true});

        //validar o produto foi adicionado ao carrinho com sucesso
        cy.contains('Meu Carrinho').should('be.visible');

    });
});