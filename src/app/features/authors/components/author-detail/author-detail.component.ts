import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../../core/services/author.service';
import { Author } from '../../../../core/models/author.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  standalone: false,
})
export class AuthorDetailComponent implements OnInit {
  author: Author | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.author = this.authorService.getById(+id);
    }
  }

  deleteAuthor() {
    if (this.author) {
      this.authorService.delete(this.author.id);
      this.router.navigate(['/authors']);
    }
  }
} 