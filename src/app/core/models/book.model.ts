import { Author } from './author.model';
import { Category } from './category.model';

export interface Book {
  id: number;
  name: string;
  authors: Author[];
  categories: Category[];
  price: number;
  releaseDate: Date;
  pageCount: number;
  publisher: string;
} 