

// ========== Variáveis Globais ==========
let numeros = []
let lista = document.getElementById('lista')
let caixaAnal = document.getElementById('analise')
let input = document.getElementById('nun')
let divanal = document.getElementById('divanal')

// ========== Event Listeners ==========
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionar()
    }
})

// ========== Funções ==========
function salvar(x, l) {
    l.push(x)
    return l
}

function adicionar() {
    let n = Number(input.value)
    
    if (!Number.isInteger(n) || n <= 0 || n > 100) {
        alert('Por favor, insira um número inteiro de 1 a 100.')
        return
    }
    
    salvar(n, numeros)
    input.value = ''
    input.focus()
    
    let item = document.createElement('option')
    item.text = `Número ${n} adicionado`
    lista.appendChild(item)
}

function limpar() {
    lista.innerText = ''
    caixaAnal.innerHTML = ''
    divanal.style.display = 'none'
    numeros = []
}

function analisar() {
    divanal.style.display = 'block'
    
    if (numeros.length === 0) {
        caixaAnal.innerHTML = 'Nenhum número salvo.'
        return
    }

    numeros.sort((a, b) => a - b)

    let maior = numeros[numeros.length - 1]
    let menor = numeros[0]
    let soma = 0

    for (let n of numeros) {
        soma = soma + n
    }

    let media = soma / numeros.length

    caixaAnal.innerHTML = `
        Ao total foram salvos ${numeros.length} números <br>
        O maior número foi ${maior} <br>
        O menor número foi ${menor} <br>
        A soma dos números é ${soma} <br>
        A média dos valores é ${media.toFixed(2)} <br>
    `
}


