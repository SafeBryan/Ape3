import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorListComponent
  },
  {
    path: 'new',
    component: AuthorFormComponent
  },
  {
    path: ':id',
    component: AuthorDetailComponent
  },
  {
    path: ':id/edit',
    component: AuthorFormComponent
  }
];

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorFormComponent,
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorsModule { } 