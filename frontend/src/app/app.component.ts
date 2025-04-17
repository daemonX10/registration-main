import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  appName: string = 'Paper presentation';
  // to come from env. file ==> profiles
  // package called dotENV
}
