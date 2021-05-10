
// abreviação de propriedades pg.61
// shorthand
let [x,y] = ['a', 'c'];
let obj = {x,y}; 

console.log(obj) // { x: 'a', y: 'c' }


// nomes de metodos abreviados
// shorthand method names pg.62

const hello = {

    name: 'abcdef',
    printHello(){
        console.log('hello')
    }    

}
console.log(hello.printHello())