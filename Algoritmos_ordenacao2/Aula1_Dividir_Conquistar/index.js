//Implementar o código da método dividir e conquistar
//Se eu tiver uma grande quantidade de dados, este método consiste em dividir os dados em 2 arrays e ordená-los
//Em seguida, devo comparar elemento a elemento desses arrays para ordená-los.

const { edGalho, edFolha } = require("./arrays");

function juntaListas(lista1, lista2) {
    //Variavel que representa o array final
    let listaFinal = [];
    //Comparar em que parte o algoritmo estará na lista 1
    let posicaoAtualLista1 = 0;
    //Comparar em que parte o algoritmo estará na lista 2
    let posicaoAtualLista2 = 0;
    //Posição atual da lista final
    let atual = 0;

    //Faz a validação de elemento a elemento de cada lista. 
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        //Mostra qual livro estará na posição atual nas listas 1 e 2
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        //Mostra as comparações que estão sendo feitas
        console.log(`comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)
        
        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }

        atual++;
    }

    //Os 2 próximos whiles são para as situações de que uma das listas termina antes da outra.
    //Com isso, os elementos restantes devem ser colocados no array final pois já estão ordenados.
    while(posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while(posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }
    
    return listaFinal;
}

console.log(juntaListas(edGalho,edFolha));