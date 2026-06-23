function gerar(){
    let tabu = document.getElementById('tabuada')
    let numero = Number(document.getElementById('nun').value)
    tabu.innerHTML = ''
    for (var c = 0; c < 10; c++){
        let item = document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        tabu.appendChild(item)
    }

}

