import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../core/services/category.service';
import { BookService } from '../../../../core/services/book.service';
import { Category } from '../../../../core/models/category.model';
import { Book } from '../../../../core/models/book.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  standalone: false,
})
export class CategoryDetailComponent implements OnInit {
  category: Category | undefined;
  books: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.category = this.categoryService.getById(+id);
      if (this.category) {
        this.books = this.bookService.getAll().filter(book =>
          book.categories.some(cat => cat.id === this.category?.id)
        );
      }
    }
  }

  getAuthorNames(book: Book): string {
    return book.authors.map(author => author.name).join(', ');
  }

  deleteCategory() {
    if (this.category) {
      this.categoryService.delete(this.category.id);
      this.router.navigate(['/categories']);
    }
  }
} 