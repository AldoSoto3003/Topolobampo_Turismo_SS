import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { PerfilesComponent } from './perfiles/perfiles.component';



@NgModule({
  declarations: [
    EmailFormComponent,
    PerfilesComponent,
  ],
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
  exports:[
    EmailFormComponent,
    PerfilesComponent
  ]
})
export class ComponentsModule { }
