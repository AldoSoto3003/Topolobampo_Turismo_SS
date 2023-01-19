
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { VideoModal2Component } from './video-modal2/video-modal2.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    VideoModalComponent,
    VideoModal2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module
],
  entryComponents:[
    
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    VideoModalComponent,
    VideoModal2Component
  ]
})
export class SharedModule { }
