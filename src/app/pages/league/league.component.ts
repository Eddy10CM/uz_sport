import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LeagueService } from '../../shared/services/league.service';
import { League } from '../../core/class/league';
import { TournamentService } from '../../shared/services/tournament.service';
import { Tournament } from '../../core/class/tournament';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styles: [
  ]
})
export class LeagueComponent implements OnInit {

  titleLeague: string = '';
  league: League = new League();
  Tournaments: Tournament[] = [];

  constructor(private routerActive: ActivatedRoute, private _leagueService: LeagueService, private _tournament: TournamentService) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((params: Params) => {
      this.titleLeague = params['league'];
      this.GetLeague(this.titleLeague);
    })
  }


  GetLeague(NameLeague: string) {
    this._leagueService.GetLeague(NameLeague)
    .subscribe(x => {
      this.league = x;
      this.GetTournaments(x.Id);
    });
  }

  GetTournaments(idLeague: string) {
    this.Tournaments = [];
    this._tournament.GetAll(idLeague)
    .subscribe(t => {this.Tournaments = t; console.log(t)});
  }

}
