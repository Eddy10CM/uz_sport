import { Component, OnInit } from '@angular/core';
import { PLAYERFORM } from '../../core/constantes/PLAYER';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styles: [
  ]
})
export class PlayersComponent implements OnInit {

  formPlayer = PLAYERFORM;

  constructor() { }

  ngOnInit(): void {
  }

  ValidateForm(form: FormGroup) {
    console.log("🚀 ~ file: players.component.ts:21 ~ PlayersComponent ~ ValidateForm ~ form", form)
    if (form.valid) {
      /*this.loading = true;
      this.auth.login(form.value)
      .subscribe({
        next: (value: Login) => {
          console.log("🚀 ~ file: login.component.ts:55 ~ LoginComponent ~ ValidateForm ~ value", value)
          this.validateUser(value)
          this.auth.saveToken = value;
        },
        error: (e) => {
          this._alert.alertSimple('Usuario o contraseña incorrecta');
          this.loading = false
          console.log("🚀 ~ file: login.component.ts:56 ~ LoginComponent ~ ValidateForm ~ e.error", e.error)
        },   
        complete: () => console.log('complete')
      });*/
       // this.auth.saveToken = data;);
    }
  }
}
