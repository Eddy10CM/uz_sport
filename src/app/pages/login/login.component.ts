import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Login } from '../../core/class/login';
import { AlertsService } from '../../shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UsuarioModel | undefined;
  loading: boolean = false;

  JSONLogin: any = {
    email: {
      label: 'Correo',
      value: '',
      type: 'text',
      validation: {
        required: true,
        /*minLength: 5,
        maxLength: 10*/
      }
    },
    password: {
      label: 'Contraseña',
      value: '',
      type: 'password',
      validation: {
        required: true
      }
    }
  };

  constructor(private auth: AuthService, private router: Router, private _user: UserService, private _alert: AlertsService) { }

  ngOnInit(): void {
  }

  ValidateForm(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.auth.login(form.value)
      .subscribe({
        next: (value: Login) => {
          console.log("🚀 ~ file: login.component.ts:55 ~ LoginComponent ~ ValidateForm ~ value", value)
          this.validateUser(value)
        },
        error: (e) => {
          this._alert.alertSimple('Usuario o contraseña incorrecta');
          this.loading = false
          console.log("🚀 ~ file: login.component.ts:56 ~ LoginComponent ~ ValidateForm ~ e.error", e.error)
        },   
        complete: () => console.log('complete')
      });
       // this.auth.saveToken = data;);
    }
  }

  validateUser(userLogin: Login) {
    this._user.GetUser(userLogin.email)
    .subscribe(user => {
      console.log("🚀 ~ file: login.component.ts:77 ~ LoginComponent ~ validateUser ~ user", user)
      this.loading = false;
      if (user.id !== '') {
        this.auth.SaveUser(user.user);
        this.auth.IdUserLogin(user.id);
        this.router.navigate(['/uzsport/profile']);
      } else {
        this.router.navigate(['/uzsport/profile']);
      }
    });
  }
}
