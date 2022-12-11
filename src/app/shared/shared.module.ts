import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { GaleryComponent } from './components/galery/galery.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardLeagueComponent } from './components/card-league/card-league.component';
import { MaterialModule } from '../material/material.module';
import { CarouselsComponent } from './components/carousels/carousels.component';
import { CountFoulComponent } from './components/count-foul/count-foul.component';
import { FormatTimerPipe } from './pipe/format-timer.pipe';
import { CardInfoTorneoComponent } from './components/card-info-torneo/card-info-torneo.component';
import { RolDeJuegoComponent } from './components/rol-de-juego/rol-de-juego.component';



@NgModule({
  declarations: [
    GaleryComponent,
    FormComponent,
    CardLeagueComponent,
    CarouselsComponent,
    CountFoulComponent,
    FormatTimerPipe,
    CardInfoTorneoComponent,
    RolDeJuegoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgImageSliderModule
  ],
  exports: [
    FormComponent,
    CardLeagueComponent,
    CountFoulComponent,
    FormatTimerPipe,
    CarouselsComponent,
    CardInfoTorneoComponent,
    RolDeJuegoComponent,
    GaleryComponent
  ]
})
export class SharedModule { }
