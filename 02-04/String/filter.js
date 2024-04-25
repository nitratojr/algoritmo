const nummeros =[1,2,3,4,5,]

const numeroProcurado = 5
function encontrar(numero){
    return numero === numeroProcurado
}
const numeroEncontrado = numeros.filter(encontrar)
console.log(numeroEncontrado)