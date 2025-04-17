import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // we need to locate the auth module class
    // then that auth module class we will load it
    // dynamically.

    // will help us ot load auth module dynamically.
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  // profile
  {
    path: 'profiles',
    loadChildren: () =>
      import('./profiles/profiles.module').then((m) => m.ProfilesModule),
  },
  // posts
  // comments
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
