function exibirMenu() {
    console.log('menu de opçoes:')
    console.log('1. opçao 1')
    console.log('2. opçao 2')
    console.log('3. opçao 3')
    console.log('sair')

}

const readline = require('readline-sync')

function processarEscolha(opçao){
    switch(opçao){
        case '1':
        console.log('voce escolheu a opçao 1')
        break
        case '2':
        console.log('voce escolheu a opçao 2')
        break
        case '3':
        console.log('voce escolheu a opçao 3')
        break
        case '4':
        console.log('opçao ivalida, por favor,escolha uma opçao valida')
        


    }
    return false
}

function main() {
    let encerrar =false

    while (!encerrar){
        exibirMenu()
        let opçao = readline.question('digite o numero da opçao desejada:')
        encerrar =processarEscolha(opçao)
    }
}