const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
/*const senha = '007'
const nome = 'cleber'
rl.question('seu nome é',(nome1) => {
if( nome === nome1){
    console.log('seu login esta correto')
}else{
    console.log('seu login esta incorreta')
}

rl.question('sua senha',(senha2) => {
    if (senha === senha2 ){
        console.log('sua senha esta correta')
    } else {
    console.log('sua senha esta incorreta')}
    
  rl.close();
 })})*/

 function nome(nome1){
    if(nome1 === 'cleber'){
        console.log('seu login esta correto')

    }else{
        console.log('seu login esta incorreto')
    }
    
 }

 function senha(senha2){
    if(senha2 ==='666'){
        console.log('sua senha esta correta')
    }else{
  console.log('sua senha esta incorreta')
    }

}
 nome(nome1)
 senha (senha2)