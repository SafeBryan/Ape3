import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import { Book } from '../../../../core/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  standalone: false,
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getAll();
  }
} 