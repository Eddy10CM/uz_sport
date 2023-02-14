import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Couch } from 'src/app/core/class/couches';
import { jsonForm } from 'src/app/core/constantes/COUCH';
import { CouchService } from '../../services/couch.service';

@Component({
  selector: 'app-add-couch',
  templateUrl: './add-couch.component.html',
  styles: [
  ]
})
export class AddCouchComponent implements OnInit {
  JSONCouch = jsonForm;
  Id:string=""
  constructor(public dialogRef: MatDialogRef<AddCouchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data:Couch,Id:string}, private _couchService: CouchService) {
      console.log(data)
    }

  ngOnInit(): void {
    console.log(this.data,"data")
    console.log(this.JSONCouch,"JSONCouch")
    
  }
  ValidateForm(form: FormGroup): void {
    console.log("🚀 ~ file: add-tournament.component.ts:24 ~ AddTournamentComponent ~ ValidateForm ~ form", form.value)
    if (form.valid) {
      let addCouch: Couch = {
        ...form.value
      }
      console.log("🚀 ~ file: add-tournament.component.ts:29 ~ AddTournamentComponent ~ ValidateForm ~ addCouch", addCouch)
      let id:string = typeof addCouch.Id == "undefined"?"":addCouch.Id.toString();
      delete addCouch.Id;
      this._couchService.Update(this.data.Id,addCouch)
      .then(d => this.dialogRef.close())
      .catch((error) => console.log(error))
    }
  }
}
