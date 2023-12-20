import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { DigitalpreparationComponent } from './digitalpreparation/digitalpreparation.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { MenuModule } from '../menu/menu.module';
// import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    LearningComponent,
    DigitalpreparationComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    FormsModule,
    // MenuModule,
    ReactiveFormsModule,
    MenuModule
  
  ],
  exports:[
    LearningComponent
 
  ]
})
export class LearningModule { }
