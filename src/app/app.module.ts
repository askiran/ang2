import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PumpsComponent } from './components/pumps/pumps.component';
import { PumpDetailsComponent } from './components/pump-details/pump-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PumpsComponent,
    PumpDetailsComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
