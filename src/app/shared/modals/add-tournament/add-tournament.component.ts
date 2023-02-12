import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LEAGUEFORM } from '../../../core/constantes/TOURNAMNET';
import { FormGroup } from '@angular/forms';
import { Tournament } from '../../../core/class/tournament';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styles: [
  ]
})
export class AddTournamentComponent {
  JSONTournament = LEAGUEFORM

  constructor(public dialogRef: MatDialogRef<AddTournamentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private _tournametService: TournamentService) {
      console.log(data)
    }

  ngOnInit(): void {
  }

  ValidateForm(form: FormGroup): void {
    console.log("🚀 ~ file: add-tournament.component.ts:24 ~ AddTournamentComponent ~ ValidateForm ~ form", form.value)
    if (form.valid) {
      let newTournament: Tournament = {
        ...form.value
        ,IdLeague: this.data
      }
      console.log("🚀 ~ file: add-tournament.component.ts:29 ~ AddTournamentComponent ~ ValidateForm ~ newTournament", newTournament)
      this._tournametService.AddTournament(newTournament)
      .then(d => this.dialogRef.close())
      .catch((error) => console.log(error))
    }
  }
}
