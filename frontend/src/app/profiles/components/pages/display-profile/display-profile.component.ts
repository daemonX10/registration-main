import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-profile',
  standalone: false,

  templateUrl: './display-profile.component.html',
  styleUrl: './display-profile.component.css',
})
export class DisplayProfileComponent {
  profile: any = localStorage.getItem('profile');
}
