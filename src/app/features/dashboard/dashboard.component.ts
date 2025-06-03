import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <div class="navigation-cards">
        <div class="card" routerLink="/books">
          <h2>Books</h2>
          <p>Manage your book collection</p>
        </div>
        <div class="card" routerLink="/authors">
          <h2>Authors</h2>
          <p>Manage authors information</p>
        </div>
        <div class="card" routerLink="/categories">
          <h2>Categories</h2>
          <p>Organize your books by categories</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
    }
    .navigation-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-4px);
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    h2 {
      color: #444;
      margin-bottom: 0.5rem;
    }
    p {
      color: #666;
      margin: 0;
    }
  `]
})
export class DashboardComponent {} 