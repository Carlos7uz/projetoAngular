import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../models/menu-item.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{
  @Input() isLoggedIn: boolean | null = null;
  @Input() title = '';
  @Input() menuItems: MenuItem[] = [];

  @Output() private logout = new EventEmitter();

  onLogout(): void{
    this.logout.emit()
  }
}
