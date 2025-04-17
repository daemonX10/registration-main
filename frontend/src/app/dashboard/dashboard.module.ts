import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { ProfilesModule } from '../profiles/profiles.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule,  DashboardRoutingModule],
})
export class DashboardModule {}
