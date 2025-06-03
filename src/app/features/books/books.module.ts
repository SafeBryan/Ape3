import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AuthorNamesPipe } from './pipes/author-names.pipe';
import { CurrencyPipe } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'new',
    component: BookFormComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  },
  {
    path: ':id/edit',
    component: BookFormComponent
  }
];

@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AuthorNamesPipe,
    CurrencyPipe
  ]
})
export class BooksModule { } 