import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../../core/services/author.service';
import { Author } from '../../../../core/models/author.model';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  standalone: false,
})
export class AuthorFormComponent implements OnInit {
  authorForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const author = this.authorService.getById(+id);
      if (author) {
        this.authorForm.patchValue(author);
      }
    }
  }

  onSubmit() {
    if (this.authorForm.valid) {
      const author: Author = {
        ...this.authorForm.value,
        books: []
      };
      if (this.isEditMode) {
        const id = this.route.snapshot.paramMap.get('id');
        author.id = +id!;
        this.authorService.update(author);
      } else {
        this.authorService.create(author);
      }
      this.router.navigate(['/authors']);
    }
  }
} 