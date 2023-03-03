import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  exports:[
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule

  ]
})
export class PagesModule { }
