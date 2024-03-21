/*Peça ao usuário sua idade e, em seguida, exiba uma mensagem dizendo se ele é maior de idade ou menor de idade.

Número Positivo ou Negativo:
Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.

Login Simples:
Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".

Calculadora Básica:
Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.
*/
/*const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question('qual sua idade?',(idade) => {
    console.log('sua idade é',idade);
        if (idade >= 18 ){
    console.log('vc é maior de idade')
        }
        else { console.log('vc é menor de idade')
    }
  rl.close();
})*/


const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('fale um numero',(numero) => {
    if (numero > 0){
        console.log('seu numero positivo')
    }else if  (numero < 0){
    console.log('seu numero e negativo')
    } else {
    console.log('seu numero igual a zero')}
    
  rl.close();
 })