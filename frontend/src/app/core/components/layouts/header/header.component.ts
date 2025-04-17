import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input()
  applicationName: string = '';

  token: any = localStorage.getItem('token');

  logout() {
    localStorage.clear();
  }
}
