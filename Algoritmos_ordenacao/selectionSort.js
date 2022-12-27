//COnstrução do selection sort
const livros = require("./listaLivros");
const menorValor = require("./menorValor")

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
}

console.log(livros)