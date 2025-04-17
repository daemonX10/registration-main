import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './compoents/auth/register/register.component';
import { LoginComponent } from './compoents/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { interceptors } from '../shared/interceptors';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [provideHttpClient(withInterceptors(interceptors)), AuthService], // all the services are registered here
})
export class AuthModule {}
