import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { League } from 'src/app/core/class/league';
import { LeagueService } from '../../shared/services/league.service';
import { LEAGUEFORM } from '../../core/constantes/LEAGUE';
import { USERFORM } from 'src/app/core/constantes/USER';

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

  constructor(private _league: LeagueService) { }

  ngOnInit(): void {
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
      console.log(form.value)
      this.resetUser = true;

      setTimeout(() => {
        this.resetUser = false;
      }, 100)
    }
  }
}
