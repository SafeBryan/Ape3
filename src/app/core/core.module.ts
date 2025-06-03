import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    NavMenuComponent
  ],
  exports: [
    NavMenuComponent
  ]
})
export class CoreModule { } 