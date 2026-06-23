let num = []
var v = 0
while (v < 10){                     //separa somente os numeros pares
    if (v % 2 == 0){
        num.push(v)
    }
    v++
}

for (var c = 0; c < num.length; c++ ){
    console.log(num[c])
}
                                            //os dois fazem a mesma coisa
for(var c in num){
    console.log(num[c])
}