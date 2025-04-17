import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthService,
  RegisterRequest,
  AuthResponse,
} from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  registerSubmit() {
    if (this.registerForm.valid) {
      const registerRequest: RegisterRequest = this.registerForm.value;

      this.authService.register(registerRequest).subscribe({
        next: (response: AuthResponse) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/auth/login']);
        },
        error: (error: any) => {
          console.error('Registration failed:', error);
          alert('Registration failed. Please try again.');
        },
      });
    } else {
      console.log('Form is invalid');
      this.printErrors();
    }
  }

  printErrors() {
    const controls = this.registerForm.controls;
    for (const controlName in controls) {
      const control = controls[controlName];
      if (control.invalid && control.touched) {
        const errors = control.errors;
        if (errors) {
          console.log(`${controlName} has the following errors:`);
          for (const error in errors) {
            console.log(`- ${error}: ${JSON.stringify(errors[error])}`);
          }
        }
      }
    }
  }
}
