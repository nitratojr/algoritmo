/*const a = 1//escopo global

function variavel (){
    const b= 2//escopo local
    console.log('variavel a',a)
    console.log('variavel b',b)
}
variavel()
console.log('variavel a',a)
console.log('variavel b',b)

function CalculaArea(altura,largura){
    const area = altura*largura
    return area 
}

const areaCalculada = CalculaArea(2,3)
console.log(CalculaArea(2,3))*/


/*function soma(a,b){
    return a + b

}
let resultado = soma(250,5)
console.log('resultado é',resultado)

const CalculaArea = function CalculaArea(altura,largura){
    const area = altura*largura
    return area 
}
const areaCalculada = CalculaArea(2,3)*/

const CalculaArea = (altura,largura)=>{
    const area = altura*largura
    return area 
}
const areaCalculada = CalculaArea(2,3)