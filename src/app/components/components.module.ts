import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import {HttpClientModule} from '@angular/common/http'

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    NgbModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    HttpClientModule,

    SharedModule
  ],
  declarations: [
    LandingPageComponent,
  ],
  exports:[
    LandingPageComponent,
  ]
})
export class ComponentsModule { }
