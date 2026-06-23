function fatorial(n){
    let calc = []
    let p = n
    for (let c = n - 1; c >= 1; c-- ){
        n = n * c  
        calc.push(c) 
    }
    calc.unshift(p)
    let resposta = calc.join(' x ')
    return ` ${resposta} = ${n}`
    
}

console.log(fatorial(5))
