let array
console.log('a. ', array)//essa vai dar indefinido.

array = null
console.log('b. ', array)//esse vai aparecer null pq é o nome da variavel.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]//esse vai contar quantas casas vc tem dentro da array.
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])//esse vai aparecer o numero de acordo com o indice que especifiquei na variavel.

array[i+1] = 19
console.log('e. ', array)//esse ira trocar o indice 1 que seria o 4 pelo numero 19.

const valor = array[i+6]//esse seria um indice 0 + 6 que daria o numero da posiçao indice 6.
console.log('f. ', valor)

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);//trocaria o A pelo I e a frase apareceria em maiusculo por causa do toUppercase e o frase.length contaria quantos caracteries tem a mensagem exibida no terminal.
