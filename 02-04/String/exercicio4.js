/*const readlineSync = require('readline-sync')

const email = readlineSync.question('qual seu email?')
const nome = readlineSync.question('qual o seu nome?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o),${nome}!`)*/
  
/*let comida= ['feijao e arroz','feijao e massa','carne','frango','churrasco']
console.log(comida)
console.log('essas são as minhas comidas preferidas:',comida.join('\n'))*/


const readlineSync = require('readline-sync')

array =['feijao e arroz','feijao e massa','carne','frango','churrasco']
const comida = readlineSync.question('qual sua comida preferida?')
array[1] = comida
console.log(array)
