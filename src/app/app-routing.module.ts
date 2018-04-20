import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PumpsComponent } from '../app/components/pumps/pumps.component';
import { PumpDetailsComponent } from '../app/components/pump-details/pump-details.component';
import { SettingsComponent } from '../app/components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PumpDetailsComponent },
  { path: 'pumps', component: PumpsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

