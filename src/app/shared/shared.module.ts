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
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { LayoutCardsFlexComponent } from './components/layout-cards-flex/layout-cards-flex.component';
import { CardFlexComponent } from './components/card-flex/card-flex.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardMemberComponent } from './components/card-member/card-member.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RatingCustomComponent } from './components/rating-custom/rating-custom.component';
import { RatingItemCustomComponent } from './components/rating-item-custom/rating-item-custom.component';
import { AddTournamentComponent } from './modals/add-tournament/add-tournament.component';



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
    GalleryItemComponent,
    LayoutCardsFlexComponent,
    CardFlexComponent,
    LoadingComponent,
    CardMemberComponent,
    CardTableComponent,
    CalendarComponent,
    RatingCustomComponent,
    RatingItemCustomComponent,
    AddTournamentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgImageSliderModule,
  ],
  entryComponents: [AddTournamentComponent],
  exports: [
    FormComponent,
    CardLeagueComponent,
    CountFoulComponent,
    FormatTimerPipe,
    CarouselsComponent,
    CardInfoTorneoComponent,
    RolDeJuegoComponent,
    GaleryComponent,
    GalleryItemComponent,
    LayoutCardsFlexComponent,
    LoadingComponent,
    CardMemberComponent,
    CardTableComponent,
    CalendarComponent,
    RatingCustomComponent,
    AddTournamentComponent
  ]
})
export class SharedModule { }
