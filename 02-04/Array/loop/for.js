/*for(let i = 0; i <= 10; i ++){
    console.log(i)
}

const numero = [14,67,89,15,23]
for(let i = 0; i < numero.length; i++){
    const elemento = numero[i]
    console.log(elemento)
}

const numeros = [14,67,89,15,23]
for(let i = 0; i < 3; i++){
    const elemento = numeros[i]
    console.log(elemento)
}*/





const numeros = [14,6,9,15]
let maiorNumero = 0 
 function calculamaior(array){
    for(let i = 0; i < array.length; i ++){
        if(array [i]> maiorNumero){
maiorNumero = array[i]
        }
    }
    return maiorNumero
 }
calculamaior(numeros)
console.log(maiorNumero)








