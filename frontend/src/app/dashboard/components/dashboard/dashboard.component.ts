import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../profiles/services/profile.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  createProfileButton: boolean = false;
  profile: any;
  userDetails: any;
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService
  ) {}

  createProfile() {
    this.router.navigate(['/profiles/create-profile']);
  }

  ngOnInit(): void {
    console.log('hello from dashboard');
    this.authService.getUserDetails().subscribe((res) => {
      this.userDetails = res;
      localStorage.setItem('userDetails', JSON.stringify(res) || '');
    });
    this.profileService.getCurrentUserProfile().subscribe(
      (res) => {
        console.log(res);
        this.profile = res;
        localStorage.setItem('profile', JSON.stringify(res));
      },
      (err) => {
        this.createProfileButton = true;
        console.log(err);
      }
    );
  }
}
