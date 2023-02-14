import { Component, Inject, OnInit } from '@angular/core';
import { Player } from 'src/app/core/class/player';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsonForm } from 'src/app/core/constantes/COUCH';
import { PlayerService } from '../../services/player.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styles: [
  ]
})
export class AddPlayerComponent implements OnInit {

  JSONCouch = jsonForm;
  Id:string=""
  constructor(public dialogRef: MatDialogRef<AddPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data:Player,Id:string}, private _playerService: PlayerService) {
      console.log(data)
    }

  ngOnInit(): void {
    console.log(this.data,"data")
    console.log(this.JSONCouch,"JSONCouch")
    
  }
  ValidateForm(form: FormGroup): void {
    console.log("🚀 ~ file: add-tournament.component.ts:24 ~ AddTournamentComponent ~ ValidateForm ~ form", form.value)
    if (form.valid) {
      let addCouch: Player = {
        ...form.value
      }
      console.log("🚀 ~ file: add-tournament.component.ts:29 ~ AddTournamentComponent ~ ValidateForm ~ addCouch", addCouch)
      let id:string = typeof addCouch.Id == "undefined"?"":addCouch.Id.toString();
      delete addCouch.Id;
      this._playerService.Update(this.data.Id,addCouch)
      .then(d => this.dialogRef.close())
      .catch((error) => console.log(error))
    }
  }
}
