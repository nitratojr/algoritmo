function CalculaAreaRetangulo(altura,largura){
    let area = altura * largura
    console.log(`a area do retangulo é ${area}.`)
}
CalculaAreaRetangulo(2,5)
CalculaAreaRetangulo(5,5)
CalculaAreaRetangulo(10,10)


function imprimeOlaMundo(){
    console.log('ola mundo')
}
function imprimeFrase(nome){
    console.log(`ola ${nome}!`)
}
imprimeFrase('cleber')
imprimeOlaMundo()
imprimeFrase('junior')
imprimeFrase('essa serie é pica sons of anarcy')


function imprimeNota1(nota1,nota2,nota3){
    
    const media = (nota1 + nota2 + nota3) /3
    console.log(media.toFixed(1))
    
}

imprimeNota1(10,20,35)

function verificaNumero(numero){
    if(numero % 2 === 0){
     console.log(`o numero ${numero} e par.`)
    }else {
        console.log(`o numero ${numero} e impar.`)
    }
    rl.close();
}
rl.question('digite um numero:',(numero) => {
    verificaNumero(numero);
})
verificaNumero(30)




