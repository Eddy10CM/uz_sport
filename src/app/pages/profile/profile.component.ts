import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { League } from 'src/app/core/class/league';
import { LeagueService } from '../../shared/services/league.service';
import { LEAGUEFORM } from '../../core/constantes/LEAGUE';
import { USERFORM } from 'src/app/core/constantes/USER';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { Login } from '../../core/class/login';
import { User } from 'src/app/core/class/users';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  JSONLeague = LEAGUEFORM;
  JSONUser = USERFORM;
  reset: boolean = false;
  resetUser: boolean = false;

  newLeague!: any;

  LoginUser!: Login;
  ShowFormProfile: boolean = false;
  UsuarioLogeado!: User;
  IdUsuario: string = '';

  rolUser: number = 0;
  loading: boolean = false;

  constructor(private _league: LeagueService, private auth: AuthService, private user: UserService, private route: Router, private routerActive: ActivatedRoute) {
    this.routerActive.params.subscribe((params: Params) => {
      this.rolUser = Number(params['typeRole']);
      console.log("🚀 ~ file: profile.component.ts:38 ~ ProfileComponent ~ this.routerActive.params.subscribe ~ this.rolUser", this.rolUser)
    })
  }

  ngOnInit(): void {
    
    this.LoginUser = this.auth.getToken;
    if (this.LoginUser.idToken !== '') {
      this.user.GetUser(this.LoginUser.email).subscribe(d => {
        console.log(d);
        if (d.id === '') {
          this.ShowFormProfile = true;
          this.auth.changeIsLogin(false);
        } else {
          this.UsuarioLogeado = d.user;
          this.IdUsuario = d.id;
          this.auth.changeIsLogin(true);
        }
      });
    }
  }

  SaveLeague(form: FormGroup){
    if (form.valid) {
      console.log(form.value)
      this.newLeague = {
        NameLeague: form.get('NameLeague')?.value,
        Description: form.get('Description')?.value,
        Like: 0,
        Status: true
      }
      this._league.AddLeague(this.newLeague)
      .then(d => {
        console.log("🚀 ~ file: profile.component.ts ~ line 55 ~ ProfileComponent ~ SaveLeague ~ d", d)
        this.reset = true;
        setTimeout(() => {
          this.reset = false;
        }, 100)
      })
    }
  }

  SaveUser(form: FormGroup){
    if (form.valid) {
      let newUser = new User({
        ...form.value
        ,birthday : new Date(form.get('birthday')?.value).toISOString().split('T')[0]
        ,email: this.LoginUser.email
        ,role: this.rolUser
        ,password:''
      });
      console.log("🚀 ~ file: profile.component.ts ~ line 76 ~ ProfileComponent ~ SaveUser ~ newUser", newUser)

      this.user.AddUser(newUser)
      .then((d) => {
        console.log("🚀 ~ file: profile.component.ts ~ line 87 ~ ProfileComponent ~ .then ~ d", d)
        this.auth.changeIsLogin(true);
        //this.route.navigate(['uzsport/member'])
        this.nextPague();
      })
      .catch((err) => {
        console.log('error', err)
      });
    
      setTimeout(() => {
        this.resetUser = true;
        this.ShowFormProfile = false;
      }, 100)
    }
  }

  nextPague(): void {
    var pague: string;
    switch (this.rolUser) {
      case 1:
        pague = 'adminLeague';
        break;
      case 2:
        pague = 'adminTeam';
        break;
      case 3:
        pague = 'adminLeague';
        break;
      case 4:
        pague = 'adminLeague';
        break;
      case 5:
        pague = 'adminLeague';
        break;
      default:
        pague = 'adminLeague';
        break;
    }

    this.navigate(pague);
  }

  navigate(pague: string): void {
    this.route.navigate([`uzsport/${pague}`]);
  }
}
