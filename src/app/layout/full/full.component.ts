import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';
import { User } from 'src/app/core/class/users';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { LeagueService } from '../../shared/services/league.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  leaguesClass: League[] = []
  usuarioLoged: User = new User();

  constructor(private router: Router, private _LeagueService: LeagueService, public _auth: UserService) { }
  

  ngOnInit(): void {
    this._LeagueService.GetAll()
    .subscribe(x => {
      this.leaguesClass = [];
      console.log("🚀 ~ file: full.component.ts ~ line 21 ~ FullComponent ~ ngOnInit ~ x", x)
      this.leaguesClass = x
    });
    console.log("🚀 ~ file: full.component.ts ~ line 31 ~ FullComponent ~ ngOnInit ~ this._auth.UserInfo", this._auth.UserInfo)
  }

  GoLeague(League: League): void {
    this.router.navigate(['/uzsport/league',League.NameLeague]);
  }
}
