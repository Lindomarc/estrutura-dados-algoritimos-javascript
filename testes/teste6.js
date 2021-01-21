let numeros = [-3,-2,-1, 0, 1,2,3];
let names = ['Ana','ana', 'Jonh', 'jonh'];

const isEven = x => x % 2 === 0; 


// console.log(numeros.every(isEven))

// console.log(numeros.some(isEven))

// numeros.forEach(x=>console.log(x % 2 === 0))

// const myMap = numeros.map(isEven)

// console.log(myMap)

// const evenNumber = numeros.filter(isEven)
// console.log(evenNumber)

// let teste = numeros.reduce((2,1))


// for (const n of numeros){
//     console.log(n % 2 === 0 ? 'even' : 'odd')
// }

// let iterator = numeros[Symbol.iterator]()

// for (const n of iterator){
//     console.log(n)
// }



console.log(names.reverse())
console.log(names.sort())
console.log(names.sort((a,b)=> {

    if(a.toLowerCase() < b.toLowerCase()){
        return -1;
    }
    if(a.toLowerCase() > b.toLowerCase()){
        return 1;
    }
    return 0;

}))

console.log(names.sort((a,b)=>b.localeCompare(a)))
console.log(names.sort((a,b)=>a.localeCompare(b)))
