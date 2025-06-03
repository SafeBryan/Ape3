import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseService<Category> {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Fiction'
    }
  ];

  getAll(): Category[] {
    return this.categories;
  }

  getById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }

  create(category: Category): Category {
    const newCategory = { ...category, id: this.generateId() };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(category: Category): Category {
    const index = this.categories.findIndex(c => c.id === category.id);
    if (index !== -1) {
      this.categories[index] = category;
      return category;
    }
    throw new Error('Category not found');
  }

  delete(id: number): void {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  private generateId(): number {
    return Math.max(0, ...this.categories.map(category => category.id)) + 1;
  }
} 