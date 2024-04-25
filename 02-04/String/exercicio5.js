let listaDeTarefa = []

const readlineSync = require('readline-sync')

const tarefa1 = listaDeTarefa.push(readlineSync.question('qual a primeira tarefa vc ja fez?'))
const tarefa2 = listaDeTarefa.push(readlineSync.question('qual a segunda tarefa vc ja fez?'))
const tarefa3 = listaDeTarefa.push(readlineSync.question('qual a terceira tarefa vc ja fez?'))

const indice = readlineSync.question('diga qual vc ja fez?')
listaDeTarefa.splice(indice,1)
console.log(listaDeTarefa)