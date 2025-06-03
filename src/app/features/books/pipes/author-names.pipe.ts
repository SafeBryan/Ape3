import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../../../core/models/author.model';

@Pipe({
  name: 'authorNames',
  standalone: true
})
export class AuthorNamesPipe implements PipeTransform {
  transform(authors: Author[]): string {
    return authors.map(author => author.name).join(', ');
  }
} 