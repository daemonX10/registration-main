import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-bio',
  standalone: false,

  templateUrl: './profile-bio.component.html',
  styleUrl: './profile-bio.component.css',
})
export class ProfileBioComponent {
  @Input() bio: string = '';
}
