//Algoritmo de ordenação
// Devemos pegar o livro mais barato e sua posição
/* 
Entendendo o conceito de algoritmos de ordenação
const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
    console.log(atual)
    console.log(maisBarato)
}

console.log(`o livro mais barato custa ${precosLivros[maisBarato]}`)
*/

const livros = require("./listaLivros.js") // importando de listaLivros

/*
let maisBarato = 0;
for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }   
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)
*/

// Utilizado no arquivo selectionSort.js
function menorValor(arrProdutos, posInicial) {
    let maisBarato = posInicial;
    
    for (let atual = posInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
        }     
    }
    return maisBarato;  
}

module.exports = menorValor;

// Analisando a complexidade do codigo
// Temos um for que pode ser executado infinitas vezes dependendo do parametro
// Dentro dele temos um if que sera executado ou não a cada bloco do for. Sera executado apenas se a condição for verdadeira
// No exemplo dos livros, podemos executar no minimo 6 operações (pois todas entram no for) até no máximo 12 operações (considerando que todas as operações entram no if)
// Ele faz entre N e 2N operações. Na notação oficial O(n)
// Neste caso, crescem de forma linear