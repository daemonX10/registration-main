import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compoents/auth/login/login.component';
import { RegisterComponent } from './compoents/auth/register/register.component';

const routes: Routes = [
  // write routes / paths for compoents from authmodule or
  // submodules.

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
