// Programação orientada a objetos com classes pg.62

class Book{
    constructor(title,pages,isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIbns(){
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title);

book.title = 'Novo Título';

console.log(book); // Book { title: 'Novo Título', pages: 'pag', isbn: 'isbn' }



// Herança pg.63

class ITBook extends Book{
    constructor(title,pages,isbn,technology){
        super(title,pages,isbn);
        this.technology = technology;
    }
    printtechnology(){
        console.log(this.technology);
    }

}

let jsBook = new ITBook('Learning JA Algoriithms','200', '1234567890', 'JavaScript')

console.log(jsBook) //
/*
ITBook {
  title: 'Learning JA Algoriithms',
  pages: '200',
  isbn: '1234567890'
}
*/


console.log(jsBook.printtechnology()) // JavaScript