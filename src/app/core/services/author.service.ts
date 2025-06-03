import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService implements BaseService<Author> {
  private authors: Author[] = [
    {
      id: 1,
      name: 'F. Scott Fitzgerald',
      books: []
    }
  ];

  getAll(): Author[] {
    return this.authors;
  }

  getById(id: number): Author | undefined {
    return this.authors.find(author => author.id === id);
  }

  create(author: Author): Author {
    const newAuthor = { ...author, id: this.generateId() };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  update(author: Author): Author {
    const index = this.authors.findIndex(a => a.id === author.id);
    if (index !== -1) {
      this.authors[index] = author;
      return author;
    }
    throw new Error('Author not found');
  }

  delete(id: number): void {
    const index = this.authors.findIndex(author => author.id === id);
    if (index !== -1) {
      this.authors.splice(index, 1);
    }
  }

  private generateId(): number {
    return Math.max(0, ...this.authors.map(author => author.id)) + 1;
  }
} 