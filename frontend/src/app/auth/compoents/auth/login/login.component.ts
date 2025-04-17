import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthService,
  LoginRequest,
  AuthResponse,
} from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value;

      this.authService.login(loginRequest).subscribe({
        next: (response: AuthResponse) => {
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          this.loginError = 'Invalid email or password';
        },
      });
    } else {
      console.log('Form is invalid');
      this.printErrors();
    }
  }

  printErrors() {
    const controls = this.loginForm.controls;
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
