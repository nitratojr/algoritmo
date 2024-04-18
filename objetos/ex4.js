const pessoa = {
    nome:'cleber',
    idade:16,

}




function copia(obj){

   let novo ={
        ... obj,
        comidapreferida :['feija','arroz','carne'],
        melhorAmigo:{
            nome:'Pedro',
            idade:20

        }
        

        
    }

    console.log(`o nome da pessoa é ${obj.nome}e suas comidas favoritas sao ${novo.comidapreferida[0]},${novo.comidapreferida[1]}, ${novo.comidapreferida[2]}e seu melhor amg se chama ${novo.melhorAmigo}e e tem ${novo.melhorAmigo.idade} anos.`)

    
}
copia(pessoa)