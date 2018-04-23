import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PumpsComponent } from './components/pumps/pumps.component';
import { AddNewPumpComponent } from './components/pumps/add-new-pump/add-new-pump.component';
import { PumpDetailsComponent } from './components/pump-details/pump-details.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PumpDetailsComponent },
  { path: 'pumps', component: PumpsComponent },
  { path: 'add-new-pump', component: AddNewPumpComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

