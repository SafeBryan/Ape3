import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../core/services/category.service';
import { Category } from '../../../../core/models/category.model';  

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  standalone: false,
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const category = this.categoryService.getById(+id);
      if (category) {
        this.categoryForm.patchValue(category);
      }
    }
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      if (this.isEditMode) {
        const id = this.route.snapshot.paramMap.get('id');
        category.id = +id!;
        this.categoryService.update(category);
      } else {
        this.categoryService.create(category);
      }
      this.router.navigate(['/categories']);
    }
  }
} 