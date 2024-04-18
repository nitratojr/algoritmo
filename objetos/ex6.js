
const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?//no primeiro aparecera juca. 
//no segundo juba.
//no terceiro aparecera jubo.
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?ele copia.