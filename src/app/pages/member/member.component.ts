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
    route: '/uzsport/profile',
    typeRol: 1
  },
  {
    title: 'Team',
    subtitulo: 'Crear equipos',
    route: '/uzsport/profile',
    typeRol: 2
  },
  {
    title: 'Player',
    subtitulo: 'Crear jugadores',
    route: '/uzsport/profile',
    typeRol: 3
  },
  {
    title: 'Referee',
    subtitulo: 'Crear arbitros',
    route: '/uzsport/profile',
    typeRol: 4
  },
  {
    title: 'Coach',
    subtitulo: 'Crear entrenadores',
    route: '/uzsport/profile',
    typeRol: 5
  }];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  nextPage(card: CardMember) {
    this.route.navigate([card.route,card.typeRol]);
  }
}
