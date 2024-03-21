const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const senha = '007'
rl.question('sua senha',(senha2) => {
    if (senha === senha2 ){
        console.log('sua senha esta correta')
    } else {
    console.log('sua senha esta incorreta')}
    
  rl.close();
 })