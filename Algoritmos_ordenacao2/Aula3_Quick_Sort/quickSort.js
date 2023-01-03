// Algoritmo descrevendo o metodo Quick Sort
// Se baseia em um elemento "pivô" para comparar com os demais elementos
// A partir dele, comparamos e vemos quais possuem valores menores que ele
// Fazemos a pivotagem da esquerda para a direita até termos um array de 2 elementos e troca-los de posição, se necessário

const listaLivros = require("./arrays");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {  
    //Se a lista for maior que 1, ela deve ser dividida
    if(array.length > 1) {
      //Particiona o array
      let indiceAtual = particiona(array, esquerda, direita);
      if(esquerda < indiceAtual - 1) {
        quickSort(array, esquerda, indiceAtual - 1)
      }
      if(indiceAtual < direita) {
        quickSort(array, indiceAtual, direita)
      }
    }
  
    return array;
}

function particiona(array, esquerda, direita) {
    //Para enchergar melhor 
    console.log('array', array)
    console.log('esquerda, direita', esquerda, direita)
    //Seleciona um novo pivo a cada particionamento
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda; //Na primeira chamada será 0
    let atualDireita = direita; //Na primeira chamada será 10

    //Local onde a esquerda e direita se encontram
    while(atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }

        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--
        }

        if(atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++
            atualDireita--
        }

    }

    //Retorna um indice para marcar onde termina e começa pela esquerda e direita
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))

/*---COMPLEXIDADE DO ALGORITMO---
Processamento que cresce de forma linear N (com um while em particiona) e temos outro de forma logaritma (recursividade)
Portanto a complexidade é O(n*logn)
Os whiles dentro do while principal percorrem apenas trechos necessários e não o algortimo todo, sendo irrelevantes para complexidade
*/