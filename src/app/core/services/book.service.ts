import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService<Book> {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Great Gatsby',
      authors: [{ id: 1, name: 'F. Scott Fitzgerald', books: [] }],
      categories: [{ id: 1, name: 'Fiction' }],
      price: 19.99,
      releaseDate: new Date('1925-04-10'),
      pageCount: 180,
      publisher: 'Scribner'
    }
  ];

  getAll(): Book[] {
    return this.books;
  }

  getById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  create(book: Book): Book {
    const newBook = { ...book, id: this.generateId() };
    this.books.push(newBook);
    return newBook;
  }

  update(book: Book): Book {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      return book;
    }
    throw new Error('Book not found');
  }

  delete(id: number): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  private generateId(): number {
    return Math.max(0, ...this.books.map(book => book.id)) + 1;
  }
} 