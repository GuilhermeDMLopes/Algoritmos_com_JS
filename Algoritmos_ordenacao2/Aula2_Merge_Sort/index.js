//Implementando algoritmo Merge Sort
//Usa a mesma tecnica "dividir para conquistar". Divide uma grande lista em partes menores (2 em 2) e às ordena.

const listaLivros = require('./arrays');

//A recursão cria novas instâncias cada vez que são chamadas
//Vão se aninhando dentro das outras. A primeira recursão é aninhamento/nível 1, a segunda é 2...

function mergeSort(array, nivelAninhamento = 0) {
  //Veremos o funcionamento da recursividade com os 2 próximos logs  
  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)

  //Se a lista for maior que 1, ela deve ser dividida
  if(array.length > 1) {
    //Pega a metade do array e arredonda o valor para baixo caso não seja inteiro
    const meio = Math.floor(array.length / 2);
    //Usaremos a recursividade para que o array seja dividido a quantidade de vezes necessária até ser do tamanho 1
    //Pega a parte do começo até o meio do array
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    //Pega a parte do meio até o final do array
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
    //Faz a ordenação dos arrays
    array = ordena(parte1, parte2);
  }

  return array;
}

//Mesma função de juntaListas da aula 1 porém reescrita com métodos prontos do JS
function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0 
  let posicaoAtualParte2 = 0
  const resultado = []

  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1]
    let produtoAtualParte2 = parte2[posicaoAtualParte2]

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1)
      posicaoAtualParte1++
    } else {
      resultado.push(produtoAtualParte2)
      posicaoAtualParte2++
    }
  }
  //Se sobrar algum elemento em um dos arrays, juntaremos com o Array resultado
  //Vamos concatenar esses elementos com o array resultado
  //UM unico parametro em slice, pega o indice do parametro até o final
  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));

/*---MAIS SOBRE RECURSIVDADE---
1) Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;

2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.

*/

/*---COMPLEXIDADE DO ALGORITMO---
Processamento que cresce de forma linear N (com um while) e temos outro de forma logaritma (recursividade)
Portanto a complexidade é O(n*logn)
*/