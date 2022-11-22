import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';
import { LeagueService } from '../../shared/services/league.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  leaguesClass: League[] = []

  constructor(private router: Router, private _LeagueService: LeagueService) { }

  ngOnInit(): void {
    this._LeagueService.GetAll()
    .subscribe(x => {
      this.leaguesClass = [];
      console.log("🚀 ~ file: full.component.ts ~ line 21 ~ FullComponent ~ ngOnInit ~ x", x)
      this.leaguesClass = x
    });
  }

  GoLeague(League: League): void {
    this.router.navigate(['/uzsport/league',League.NameLeague]);
  }
}
