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