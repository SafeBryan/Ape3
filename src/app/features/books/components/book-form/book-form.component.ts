import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../../core/services/book.service';
import { AuthorService } from '../../../../core/services/author.service';
import { CategoryService } from '../../../../core/services/category.service';
import { Book } from '../../../../core/models/book.model';
import { Author } from '../../../../core/models/author.model';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  standalone: false,
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  authors: Author[] = [];
  categories: Category[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      authors: [[], Validators.required],
      categories: [[], Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      releaseDate: ['', Validators.required],
      pageCount: [0, [Validators.required, Validators.min(1)]],
      publisher: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.authors = this.authorService.getAll();
    this.categories = this.categoryService.getAll();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const book = this.bookService.getById(+id);
      if (book) {
        this.bookForm.patchValue(book);
      }
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      if (this.isEditMode) {
        const id = this.route.snapshot.paramMap.get('id');
        book.id = +id!;
        this.bookService.update(book);
      } else {
        this.bookService.create(book);
      }
      this.router.navigate(['/books']);
    }
  }
} 