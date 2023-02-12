import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    route: '/uzsport/team'
  },
  {
    title: 'Player',
    subtitulo: 'Crear jugadores',
    route: '/uzsport/player'
  },
  {
    title: 'Referee',
    subtitulo: 'Crear arbitros',
    route: '/uzsport/member'
  },
  {
    title: 'Coach',
    subtitulo: 'Crear entrenadores',
    route: '/uzsport/member/couches'
  }];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  nextPage(route: string) {
    this.route.navigate([route]);
    console.log("🚀 ~ file: member.component.ts:44 ~ MemberComponent ~ nextPage ~ route", route)
  }
}
