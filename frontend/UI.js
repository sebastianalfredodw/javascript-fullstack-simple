import BookService from './services/BookService';
const bookService = new BookService();

import { format } from 'timeago.js';

class UI {
  async renderBooks() {
    const books = await bookService.getBooks();
    const booksCardContainer = document.getElementById('books-cards');
    booksCardContainer.innerHTML = '';
    
    books.forEach((book) => {
      const div = document.createElement('div');
      div.className = '';
      div.innerHTML = `
                <div class="card m-2">
                    <div class="row no-gutters">
                        <div class="col-md-5 text-center">
                            <img src="${book.imagePath}" alt="" class="img-fluid m-2" />
                        </div>
                        <div class="col-md-7">
                            <div class="card-block m-3 text-center">
                                <h4 class="card-title">Marca: ${book.marca}</h4>
                                <p class="card-text">Producto: ${book.product}</p>
                                <p class="card-text">Precio: $${book.price}</p>
                                <p class="card-text">Item: ${book.item}</p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">Borrar</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(book.created_at)}
                    </div>
                </div>
            `;
      booksCardContainer.appendChild(div);
    });
  }

  async addANewBook(book) {
    await bookService.postBook(book);
    this.clearBookForm();
    this.renderBooks();
  }

  clearBookForm() {
    document.getElementById('book-form').reset();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
     const div = document.createElement('div');
     div.className = `alert alert-${colorMessage} message`;
     div.appendChild(document.createTextNode(message));

     const container = document.querySelector('.col-md-5');
     const bookForm = document.querySelector('#book-form');
     
    container.insertBefore(div, bookForm);
    setTimeout(() => {
        document.querySelector('.message').remove();
    }, secondsToRemove);

  }

  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderBooks();
  }
}

export default UI;
