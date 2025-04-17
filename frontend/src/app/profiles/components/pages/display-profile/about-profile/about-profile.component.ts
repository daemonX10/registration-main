import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-profile',
  standalone: false,

  templateUrl: './about-profile.component.html',
  styleUrl: './about-profile.component.css',
})
export class AboutProfileComponent {
  @Input() userId: string = '';
  @Input() website: string = '';
}
