import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedServiceService } from "./shared-service.service"
import { ReactiveFormsModule } from "@angular/forms";
import { GuardMeGuard } from "./guard-me.guard";

const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardMeGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule,]
})
export class AppModule { }
