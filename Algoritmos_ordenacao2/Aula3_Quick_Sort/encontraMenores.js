// Algoritmo descrevendo o metodo Quick Sort
// Se baseia em um elemento "pivô" para comparar com os demais elementos
// A partir dele, comparamos e vemos quais possuem valores menores que ele
// Fazemos a pivotagem da esquerda para a direita até termos um array de 2 elementos e troca-los de posição, se necessário

const listaLivros = require("./arrays");

function encontraMenores(pivo, array) {
    // Quantidade de itens menores que o pivo
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        //Se houver produtos mais baratos, acrescentar a quantidade de itens menores que o pivo
        if(produtoAtual.preco < pivo.preco) {
            menores++
        }
    }
    
    //Pega o pivo e coloca ele na posição seguinte a quantidade de elementos menores que ele
    // Se houver cinco elementos menores, colocar o pivo na sexta posição
    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

//trocar os elementos de lugar
function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

//Pegar o pivo e dividir tudo que for menor, antes dele e o que for maior, depois.
function divideNoPivo(array) {
    //Pegando sempre o elemento do centro
    let pivo = array[Math.floor(array.length / 2)];

    //Pega o pivo e encontra menores
    encontraMenores(pivo, array);
    //Quantidade de elementos menores
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        //Coloca os elementos menores a esquerda do pivo
        //a ultima condição é para garantir que o pivo não compare com ele mesmo e o troque de lugar
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array;
}

//console.log(encontraMenores(listaLivros[2], listaLivros));
console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;