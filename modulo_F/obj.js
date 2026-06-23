let amigo = {nome:'math', idade: 25, sexo:'M', peso: 80, engordar(p=0){
    console.log('Engordou')
    this.peso += p 
}}

amigo.engordar(5)
console.log(amigo.peso)