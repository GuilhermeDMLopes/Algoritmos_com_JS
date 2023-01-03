// Algoritmo que realiza o conceito de busca binária
// Em um jogo de adivinhação, devo adivinhar um numero entre 0 e 10.
// Se eu chutar na metade e passeoa me responder se é maior ou menor, ja consigo eliminar a metade das possibilidades

const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) {
    //verificar busca
    console.log('de, ate ', de, ate);

    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(de > ate) {
        return -1;
    }

    if(valorBuscado === atual.preco) {
        return meio;
    }

    if(valorBuscado < atual.preco) {
        //descartar tudo que esta a direita do meio
        return busca(array, de, meio - 1, valorBuscado);
    }

    if(valorBuscado > atual.preco) {
        //descartar tudo que esta a esquerda do meio
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 40))

//Se passarmos um valor de busca maior do que existe, gerará um loop até dar o erro "RangeError: Maximum call stack size exceeded"
// Foi corrigido com o if de > ate

//Se passarmos um numero menor
/*
No caso de valores menores, o código do algoritmo chama a função busca() passando sempre o valor do parâmetro ate diminuindo um número
Quando o valor atinge -1, que não é um valor válido de índice de array, o resultado de atual.preco retornará undefined.
*/

//Se passarmos um numero inexistente no meio da lista
/*
Dessa vez, voltamos a receber o rangeError. Observando o `console.log(‘de, ate’, de, ate), os valores finais retornados são
Até atingir call stack size exceeded, da mesma forma que ocorreu quando passamos o valor de 60, maior do que o maior elemento do array.
*/

/*---COMPLEXIDADE DO ALGORITMO---
Para uma lista de 2 elementos, precisaremos de 1 operação. Para uma lista de 4 elementos, precisaremos de 2 operações. Para 8, 3 operações...
1 operação = 2¹ = 2 elementos
2 operações = 2² = 4 elementos
3 operações = 2³ = 8 elementos ...
Logo, a complexidade é O(log n) na base 2
*/