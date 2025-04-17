import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/forms/create-profile/create-profile.component';
import { DisplayProfileComponent } from './components/pages/display-profile/display-profile.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: 'display-profile',
    component: DisplayProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
