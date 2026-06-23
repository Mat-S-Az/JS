function calcular(){
        let ini = Number(document.getElementById('inicio').value)
        let fim = Number(document.getElementById('fim').value)
        let pass = Number(document.getElementById('passo').value)
        let resul = document.getElementById('resultado')
        resul.innerHTML = ''

        if (ini == 0 || fim <= 0){
            resul.innerHTML = 'Impossível realizar contagem.'
        } else if (pass <= 0){
            alert('Passo inválido, considerando passo = 1')
            pass = 1
            for( let c = ini ; c <= fim ; c = c + pass){
            resul.innerHTML += ` ${c} `
            }
        } else if (ini < fim) {
            // contagem crescente
            for( let c = ini ; c <= fim ; c = c + pass){
            resul.innerHTML += ` ${c} `
            }
            // contagem regressiva
        } else {
            for( let c = ini ; c >= fim ; c = c - pass){
            resul.innerHTML += ` ${c} `
            }
        }
}