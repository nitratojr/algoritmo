const usuario = {
    nome:'prof',
    idade: 29,
    email:'junior.js@gmail.com',
    cidade:'rs'
}






const novoUsuario = {
    ...usuario,
    nome:'cleber',
    idade:25

}



const listaDenome = ['son','jonh','dom']
const copiaListaDeNome =[...listaDenome]


console.log(copiaListaDeNome)