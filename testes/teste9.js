// @ts-check

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    /**
     * adicionar novo item no final da fila
     * @param {string} element
     */
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * remover primeiro item da fila,
     * devolver elemento removido
     */
    dqueue(){
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    /**
     * Mostrar primeiro item da fila
     */
    peek(){
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    /**
     * Responder se fila é vázia
     */
    isEmpty(){
        return this.size() === 0; 
    }

    /**
     * Mostrar tamanho da fila
     */
    size(){
        return this.count - this.lowestCount;
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    toString(){
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;

    }

}

const queue = new Queue();
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Maria')

console.log(queue.toString())

queue.enqueue('Camila')

console.log(queue.size())

queue.dqueue();
queue.dqueue();

console.log(queue.toString());