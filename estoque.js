const readlineSync = require('readline-sync');
const OPERACAO_COMPRA = 1;
const OPERACAO_VENDA = 2;


// Lê um valor do usuário de forma síncrona
let resposta = readlineSync.question("Informe a quantidade inicial de pecas: ");
let quantidadeEstoque = parseInt(resposta);

do {
    console.log("\nInforme a opção que você deseja:");
    resposta = readlineSync.question("1 - Compra de pecas ou 2 - Venda de pecas: ");
    let operacao = parseInt(resposta);
    
    resposta = readlineSync.question("\nInforme a quantidade de pecas a movimentar: ");
    let quantidadePecas = parseInt(resposta);
    
    switch (operacao) {
        case OPERACAO_COMPRA:
            quantidadeEstoque = quantidadeEstoque + quantidadePecas;
            break;
            
        case OPERACAO_VENDA:
            if (quantidadePecas < quantidadeEstoque) {
                quantidadeEstoque = quantidadeEstoque - quantidadePecas;
            } else {
                console.log("\nSaldo em estoque insuficiente");
            }
            break;
            
            default:
                console.log("\nOpcao nao valida!");
                break;
    }
                
    console.log("\nSaldo atual do estoque: " + quantidadeEstoque);
    
    console.log("\nDeseja continuar:");
    resposta = readlineSync.question("S - Sim ou N - Nao ");

} while (resposta.toUpperCase() === 'S');

console.log("\nSistema Encerrado");