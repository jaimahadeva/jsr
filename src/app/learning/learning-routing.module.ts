import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning.component';
import { DigitalpreparationComponent } from './digitalpreparation/digitalpreparation.component';

const routes: Routes = [{ path: 'home', component: LearningComponent },
{ path: 'digitalpreparation', component: DigitalpreparationComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
