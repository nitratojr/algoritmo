 /*const readlineSync = require('readline-sync')

const nome = readlineSync.question('qual o seu nome?')
const idade = readlineSync.question('qual a sua idade?')
const cidade = readlineSync.question('qual a sua cidade?')

console.log('nome:',nome)
console.log('idade:',idade)
console.log('cidade:',cidade)*/

const readlineSync = require('readline-sync')

const email = readlineSync.question('qual seu email?')
const nome = readlineSync.question('qual o seu nome?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o),${nome}!`)


