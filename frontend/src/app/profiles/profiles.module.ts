import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileService } from './services/profile.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptors } from '../shared/interceptors';
import { CreateProfileComponent } from './components/forms/create-profile/create-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayProfileComponent } from './components/pages/display-profile/display-profile.component';
import { AboutProfileComponent } from './components/pages/display-profile/about-profile/about-profile.component';
import { ProfileBioComponent } from './components/pages/display-profile/profile-bio/profile-bio.component';
import { ProfileGitComponent } from './components/pages/display-profile/profile-git/profile-git.component';
import { ProfileTopComponent } from './components/pages/display-profile/profile-top/profile-top.component';
import { ClientProfileComponent } from './components/form/client-profile/client-profile.component';

@NgModule({
  declarations: [
    CreateProfileComponent,
    DisplayProfileComponent,
    AboutProfileComponent,
    ProfileBioComponent,
    ProfileGitComponent,
    ProfileTopComponent,
    ClientProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfilesRoutingModule,
  ],
  providers: [
    provideHttpClient(withInterceptors(interceptors)),
    ProfileService,
  ],
  exports: [],
})
export class ProfilesModule {}
