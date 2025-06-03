import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../../core/services/author.service';
import { Author } from '../../../../core/models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  standalone: false,
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authors = this.authorService.getAll();
  }
} 