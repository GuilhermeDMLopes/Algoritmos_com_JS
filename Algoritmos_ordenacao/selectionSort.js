//Construção do selection sort
const livros = require("./listaLivros");
const menorValor = require("./menorValor");
const troca = require('./troca');

for(let atual = 0; atual < livros.length; atual++) { //Ou livros.length - 1 (A ultima casa é redundante)
    let menor = menorValor(livros, atual);

    console.log("Posição atual ", atual)
    // Verifica a posição dos livros
    let livroAtual = livros[atual];
    console.log("livro atual", livros[atual])
    let livroMenorPreco = livros[menor];
    console.log("livro menor preço", livros[menor])

    // Trocando as informações de lugar
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
    
    // Podemos substituir toda a logica acima pela função
    //troca(livros, menor)
}

console.log(livros)

// Analisando a complexidade do codigo
// Temos um for que pode ser executado infinitas vezes dependendo do parametro
// Dentro dele temos uma função de menorValor.js que tem complexidade N a 2N
// Neste caso temos N*N(ou 2N), tendo complexidade de N²(ou 2N²). Na notação oficial O(n²)
// No exemplo dos livros, podemos executar no minimo 36 operações (pois todas entram no for do arquivo e no for de menorValor.js) até no máximo 144 operações (considerando que todas as operações entram no if)
// Neste caso, crescem de forma exponencial