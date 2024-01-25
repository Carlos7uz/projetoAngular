import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      toolTipText: 'Heroes'
    }
  ]
}
