
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
// no primeiro vai dar false e no segundo vai dar undefind no caso indefinido.
//saira esse valor pois nao existe o valor inserido no console.
