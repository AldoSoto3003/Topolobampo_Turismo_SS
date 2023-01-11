import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    LandingPageComponent
  ]
})
export class ComponentsModule { }