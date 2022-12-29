//Arquivo com código do Insertion Sort
//Compara o valor da posição com a posição anterior.

const livros = require("./listaLivros");

function insertionSort(lista) {
    // Se quiser, pode alterar o atual para 1 e remover a condição do while analise > 0
    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        // Analise > 0 pois a posição inicial é 0. Se não tiver, ele vai tentar fazer analise - 1 = -1, gerando erro
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            // Salva a posição do livro mais barato
            let itemAnalise = lista[analise];
            // Salva a posição anterior com o preço mais elevado
            let itemAnterior = lista[analise - 1];            

            // Trocando as informações de lugar. Mais barato antes do mais caro
            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise
            
            //Podemos substituir a logica dentro do while por:
            //troca(lista, analise);

            // Faz o valor de análise retornar ao valor anterior
            analise--
        }
    }
    console.log(lista);
}

insertionSort(livros);

// Analisando a complexidade do codigo
// Temos um for que pode ser executado infinitas vezes dependendo do parametro
// Dentro dele temos um while que será executado até a condição falhar
// Neste caso temos 2 loops, tendo a condição de N*N ou N². Na notação oficial O(n²)
// No exemplo dos livros, podemos executar no minimo 36 operações (pois todas entram no for do arquivo e no WHILE)
// Neste caso, crescem de forma exponencial