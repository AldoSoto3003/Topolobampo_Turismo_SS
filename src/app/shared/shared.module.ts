
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
import { VideoModal3Component } from './video-modal3/video-modal3component';
import { VideoModal4Component } from './video-modal4/video-modal4.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    VideoModalComponent,
    VideoModal2Component,
    VideoModal3Component,
    VideoModal4Component
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
    VideoModal2Component,
    VideoModal3Component,
    VideoModal4Component
  ]
})
export class SharedModule { }
