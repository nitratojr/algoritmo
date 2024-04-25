let personagem = ['jinho wo','sasuke','meliodas','ban','mash']
function persoRandom() {
let numero = Math.floor(Math.random() * (personagem.length))
return console.log(`vc é ${personagem[numero]}`)

}
persoRandom()