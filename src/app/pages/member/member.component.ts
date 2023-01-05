import { Component, OnInit } from '@angular/core';
import { CardMember } from '../../core/class/card-member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styles: [
  ]
})
export class MemberComponent implements OnInit {

  cardsMember: CardMember[] = [{
    title: 'League',
    subtitulo: 'Crear ligas y torneos',
    route: '/uzsport/league'
  },
  {
    title: 'Team',
    subtitulo: 'Crear equipos',
    route: '/uzsport/member'
  },
  {
    title: 'Player',
    subtitulo: 'Crear jugadores',
    route: '/uzsport/member'
  },
  {
    title: 'Referee',
    subtitulo: 'Crear arbitros',
    route: '/uzsport/member'
  },
  {
    title: 'Coach',
    subtitulo: 'Crear entrenadores',
    route: '/uzsport/member'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(route: string) {
    console.log("🚀 ~ file: member.component.ts:44 ~ MemberComponent ~ nextPage ~ route", route)
  }
}
