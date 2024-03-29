import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.module';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
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

  constructor(private authService: AuthService){
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  onLogout(): void{
    this.authService.logout();
  }

}
