#language:pt
Funcionalidade: Adiciona

    Como usuario desejo adicionar produto ao carrinho a partir de uma busca
    @focus
Cenario: Adicionar produto ao carrinho a partit de uma busca
    Dado que acesso o site Futfanatics
    Quando busco por Camisa do Brasil e pressiono Enter
    Entao exibe uma lista de resultados para Camisa do Brasil
    Quando escolho Camisa Brasil CBF Basic Amarela
    E escolho Tamanho G e clico em Comprar
    Entao exibe produto ao Meu carrinho com sucesso