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
    `
    @font-face {
      font-family: uz_sport;
      src: url(../../../assets/fonts/uz_sport.ttf) format("opentype");
    }
    .material-icons{
      font-family: 'Material Icons'!important;
    }
    *{
        font-family:uz_sport
    }
    .square-green{
      color:#90c43c!important
    }
    .flex-spacer{
      flex: 1 1 auto;
    }
    .icon-social{
      color:black
    }
    .fa{
      font-family: 'FontAwesome'!important;
    }
    .avatar{
      width: 30px;
      border-radius: 50%;
      /* background: black!important; */
      height: 30px;
    }
    .avatar img{
      background-size: cover;
      width: 30px;
      border-radius: 50%;
    }
    `
  ]
})
export class FullComponent implements OnInit {

  leaguesClass: League[] = []
  usuarioLoged: User = new User();

  constructor(private router: Router, private _LeagueService: LeagueService, public _auth: AuthService) { }
  

  ngOnInit(): void {
    this._LeagueService.GetAll()
    .subscribe(x => {
      this.leaguesClass = [];
      console.log("🚀 ~ file: full.component.ts ~ line 21 ~ FullComponent ~ ngOnInit ~ x", x)
      this.leaguesClass = x
    });

    this._auth.getInfoUser()
    .subscribe(data => {
      console.log("🚀 ~ file: full.component.ts ~ line 54 ~ FullComponent ~ ngOnInit ~ data", data)
    })
  }

  GoLeague(League: League): void {
    this.router.navigate(['/uzsport/league',League.NameLeague]);
  }
}
