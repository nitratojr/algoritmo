/*Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um variaveis para receber a idade do usuário.

b) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

Agora faça um programa que verifica que turno do dia um aluno estuda. Escolha entre M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else. 💡 Dica ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!" Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

Se o usuário digitar "V", a saída deve ser: "Boa Tarde!"

Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme"*/
let idade = 18
let maior = 18
if (idade >= maior){
    console.log('vc pode dirigir')
}
else {
    console.log('vc nao pode dirigir')
}
let horaio = 'manha'

if (horaio ==='manha'){
    console.log('bom dia')
}else if (horaio === 'tarde'){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}

swith(horaio){
    case'manha':
    console.log('bom dia')
    break
    default: console.log('boa noite')
    break
}
let generof = 'fantasia'
let preço = 12
if (generof === 'fantasia' && preço < 15){
    console.log('bom filme');
} else {
    console.log('escolha outro filme.');
}l

