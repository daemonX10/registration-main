import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-top',
  standalone: false,

  templateUrl: './profile-top.component.html',
  styleUrl: './profile-top.component.css',
})
export class ProfileTopComponent {
  userDetails: any = JSON.parse(localStorage.getItem('userDetails') || '');

  profileDetails: any = JSON.parse(localStorage.getItem('profile') || '');
}
