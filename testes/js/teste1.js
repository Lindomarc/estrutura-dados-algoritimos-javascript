
function sum(x = 1, y = 2, z = 3){
    return x + y + z
}

console.log(sum(4,2)) // 9

// Declarando os operadores de espalahamento e rest pg.60

let params = [2,3,4]

console.log(sum(...params)) // 9

