const professor = {//simbolo de = significa atribuiçao de valor.
    nome:'cleber',
    idade:30,
    tarefas:['dar aula','responder duvidas'],
    email:'cleber.jr@gmail.com',
    contarPiada: function (){
        console.log('é pave ou pa come')

    }
}
console.log(professor.nome)

console.log(professor.nome = 'junior')//é para alterar o valor.

const donoDoPet = {
    nome:'cleber',
    pet:{
nomeDoPet:'bob',
raça:'pitbull',
idade:5
    }
}
console.log(donoDoPet.pet.nomeDoPet)