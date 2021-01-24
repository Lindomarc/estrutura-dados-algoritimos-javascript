// @ts-check

class Stack {
    #var_private = 'private';
    var_public = 'public'
    constructor() {
        console.log(this.#var_private);
        console.log(this.var_public);
    }
}
const teste = new Stack()

