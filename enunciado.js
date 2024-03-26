/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))//multplicaçao dos dois numeros exibidos no console.log multplicados por 5.*/

/*function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)//daria erro.*/

let textoDoUsuario = prompt("eu gosto de cenoura");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)//ele vai ver se a palavra cenoura esta presente na frase e colocara a palavra em minusculo caso esteja em maiusculo.
/*i. `Eu gosto de cenoura`//true
ii.  `CENOURA é bom pra vista`//true
iii. `Cenouras crescem na terra`*///false