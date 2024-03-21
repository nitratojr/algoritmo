const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('fale um numero',(numero) => {
rl.question('fale outro numero',(numero2) => {
rl.question('fale o sinal (+) (-) (*) (/):',(sinal)=>{
const soma = Number(numero) + Number(numero2)
const menos = Number(numero) - Number(numero2)
const mult = Number(numero) * Number(numero2)
const div = Number(numero) / Number(numero2)
if((sinal)==='+'){
    console.log('seu resultado é:',soma)
}else if ((sinal)=== '-'){
    console.log('seu resultado é:',menos)
}else if ((sinal)=== '*'){
    console.log('seu resultado é:',mult)
}else{
    console.log('seu resultado é:',div)
}


    
  rl.close();
})})})