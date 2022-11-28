import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UsuarioModel | undefined;

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*this.user = new UsuarioModel({
      email : 'eddy10.cm@gmail.com',
      nombre : 'Carlos Eduardo Moreno',
      password : 'AnaElena151198*'
    });*/
  }

  ValidateForm(form: FormGroup) {
    console.log("🚀 ~ file: login.component.ts ~ line 47 ~ LoginComponent ~ ValidateForm ~ form", form)
    if (form.valid) {
      this.auth.login(form.value)
      .subscribe((data: any) => {
        this.auth.saveToken = data;
        this.router.navigate(['/uzsport/profile']);
      });
    }
  }
}
