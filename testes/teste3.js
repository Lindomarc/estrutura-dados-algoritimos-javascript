// Programação orientada a objetos com classes pg.62

class Book{
    constructor(title,pages,isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIbns(){
        console.log(this.isbn)
    }
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title);

book.title = 'Novo Título'

console.log(book) // Book { title: 'Novo Título', pages: 'pag', isbn: 'isbn' }

