import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './pages/score/score.component';
import { ScoreRoutingModule } from './score-routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ScoreAppModule { }
