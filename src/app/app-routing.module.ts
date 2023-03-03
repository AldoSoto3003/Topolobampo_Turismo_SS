import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: LandingPageComponent },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
