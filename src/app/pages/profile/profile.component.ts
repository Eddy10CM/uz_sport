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
import { Router } from '@angular/router';

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

  constructor(private _league: LeagueService, private auth: AuthService, private user: UserService, private route: Router) { }

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
    console.log("🚀 ~ file: profile.component.ts:72 ~ ProfileComponent ~ SaveUser ~ form", new Date(form.get('birthday')?.value).toISOString())

    if (form.valid) {
      let newUser = new User({
        ...form.value
        ,email: this.LoginUser.email
        ,role: ''
      });
      console.log("🚀 ~ file: profile.component.ts ~ line 76 ~ ProfileComponent ~ SaveUser ~ newUser", newUser)
      //his.route.navigate(['uzsport/member'])

      this.user.AddUser(newUser)
      .then((d) => {
        console.log("🚀 ~ file: profile.component.ts ~ line 87 ~ ProfileComponent ~ .then ~ d", d)
        this.auth.changeIsLogin(true);
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
}
