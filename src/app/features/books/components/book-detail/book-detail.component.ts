import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../../core/services/book.service';
import { Book } from '../../../../core/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  standalone: false,
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const foundBook = this.bookService.getById(+id);
      this.book = foundBook || null;
    }
  }

  getAuthorNames(): string {
    return this.book?.authors.map(author => author.name).join(', ') || '';
  }

  getCategoryNames(): string {
    return this.book?.categories.map(c => c.name).join(', ') || '';
  }

  deleteBook() {
    if (this.book) {
      this.bookService.delete(this.book.id);
      this.router.navigate(['/books']);
    }
  }
} 