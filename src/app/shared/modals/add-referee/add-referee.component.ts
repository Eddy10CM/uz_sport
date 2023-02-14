import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Referee } from 'src/app/core/class/referees';
import { jsonForm } from 'src/app/core/constantes/REFEREE';
import { RefereeService } from '../../services/referee.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.component.html',
  styles: [
  ]
})
export class AddRefereeComponent implements OnInit {

 JSONReferee = jsonForm;
  Id:string=""
  constructor(public dialogRef: MatDialogRef<AddRefereeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data:Referee,Id:string}, private _refereeService: RefereeService) {
      console.log(data)
    }

  ngOnInit(): void {
    console.log(this.data,"data")
    console.log(this.JSONReferee,"JSONReferee")
    
  }
  ValidateForm(form: FormGroup): void {
    console.log("🚀 ~ file: add-referee.component.ts:24 ~ AddTournamentComponent ~ ValidateForm ~ form", form.value)
    if (form.valid) {
      let addReferee: Referee = {
        ...form.value
      }
      console.log("🚀 ~ file: add-referee.component.ts:29 ~ AddTournamentComponent ~ ValidateForm ~ addReferee", addReferee)
      delete addReferee.Id;
      this._refereeService.Update(this.data.Id,addReferee)
      .then(d => this.dialogRef.close())
      .catch((error) => console.log(error))
    }
  }

}
