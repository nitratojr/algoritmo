const listaDeCompras = ['batata','alface','queijo']
const segundoItem = listaDeCompras[2]
console.log(segundoItem)

const lista_da_mega = [2,3,7,36,9,10]

const raça = ['buldog','pastor alemao','husky','mastin tibetano','pitbull']
const quartoItem = raça[4]
console.log(quartoItem)

const serie = ['o mentalista','supernatural','the originals']
console.log(serie.length)

const series = ['o mentalista','supernatural']
series.includes('o mentalista')
series.includes('the boys')

const numeros = [1,2,3]//adiciona um ou mais elementos.

numeros.push(4)
console.log(numeros)

numeros.push(5,6,7,)
console.log(numeros)

const peixes = ['palhaço','mandarim','estujao']//retira o ultimo elemento
peixes.pop()
console.log(peixes)

const letras = ['a','b','c','d','e','f','g','h']
//indicis (i)    0   1    2   3   4   5   6   7
letras.splice(2,1)
//letras = [a,b,d,e,f,g,h]
letras.splice(3,2) //letras = [a,b,d,g,h]




