import { Component } from '@angular/core';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NavMenuComponent, RouterModule, IonicModule],
  standalone: true
})
export class AppComponent {
  constructor() {}
}
