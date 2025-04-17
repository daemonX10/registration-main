import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: false,

  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css',
})
export class CreateProfileComponent {
  profileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      status: ['', Validators.required],
      company: [''],
      website: [''],
      location: [''],
      skills: ['', Validators.required],
      githubUsername: [''],
      bio: [''],
      twitter: [''],
      facebook: [''],
      youtube: [''],
      linkedin: [''],
      instagram: [''],
    });
  }
  profileSubmit() {
    console.log(this.profileForm.value);
    this.profileService.createProfile(this.profileForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      (err) => console.log(err)
    );
  }
}
