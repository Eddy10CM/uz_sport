import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Couch } from 'src/app/core/class/couches';
import { jsonForm } from 'src/app/core/constantes/COUCH';
import { Header } from 'src/app/core/interfaces/header';
import { CouchService } from '../../shared/services/couch.service';
@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styles: [
  ]
})
export class CoachesComponent implements OnInit {
  JSONForm = jsonForm;
  resetForm: boolean = false;
  nuevoCouch!: Couch;
  couches!: Couch[];
  Id: string = "";
  headers: Header[] = [
    {
      value: 'Name',
      text: 'Nombre'
    },
    {
      value: 'Experiencia',
      text: 'Experiencia'
    },
    {
      value: 'Specialty',
      text: 'Especialidad'
    },
    {
      value: 'Contact',
      text: 'Contacto'
    },
    {
      value: 'Rate',
      text: 'Rate'
    },
    {
      value: 'action_edit',
      text: 'Editar'
    },
    {
      value: 'action_delete',
      text: 'Eliminar'
    },
  ];
  constructor(private _couch: CouchService) { }
  Guardar(form: FormGroup) {
    if (form.valid) {
      this.nuevoCouch = form.value;
      if (this.Id != "") {
        this.Id="";
        //update
        console.log("update",this.Id);
        this.resetForm = true;
        this._couch.Update(this.Id, this.nuevoCouch).then(newCouchResponse => {
          setTimeout(() => {
            console.log("🚀 ~ file: profile.component.ts ~ line 55 ~ ProfileComponent ~ SaveLeague ~ d", newCouchResponse)
            this.resetForm = false;
            // setTimeout(() => {
            //   this.nuevoCouch.Name='Nuevo Nombre';
            //   console.log(this.nuevoCouch);
            //   this._couch.UpdateCouch(this.nuevoCouch);
            // }, 20000);
          }, 100)
        })
      }
      else {
        this._couch.Add(this.nuevoCouch)
          .then(newCouchResponse => {
            this.resetForm = true;
            setTimeout(() => {
              console.log("🚀 ~ file: profile.component.ts ~ line 55 ~ ProfileComponent ~ SaveLeague ~ d", newCouchResponse)
              this.resetForm = false;
              // setTimeout(() => {
              //   this.nuevoCouch.Name='Nuevo Nombre';
              //   console.log(this.nuevoCouch);
              //   this._couch.UpdateCouch(this.nuevoCouch);
              // }, 20000);
            }, 100)
          })
      }
    }
  }
  ngOnInit(): void {
    // console.log(this._couch.Get(),"couches1");
    this._couch.GetAll().subscribe(couches => {
      console.log(couches, "couches")
      setTimeout(() => {
        this.couches = couches;
        console.log(this.couches)
      }, 100);
    });
    // this._couch.GetAll().su
    // console.log(this._couch.Get(),"Get");
  }
  Editar(couch: Couch) {
    if (couch.Id) { this.Id = couch.Id; delete couch.Id; }
    // couch.Specialty='El mejor';
    // this._couch.Update(Id,couch);
    this.JSONForm['Name'].value = couch.Name;
    this.JSONForm['Experiencia'].value = couch.Experiencia.toString();
    this.JSONForm['Specialty'].value = couch.Specialty;
    this.JSONForm['ProfilePic'].value = couch.ProfilePic;
    this.JSONForm['Contact'].value = couch.Contact;
    let json = JSON.parse(JSON.stringify(this.JSONForm));
    this.JSONForm=Object.assign({});
    setTimeout(() => {
      this.JSONForm=json;
      console.log(couch, "Editar Couch");
    }, 400);
  }
  Eliminar(couch: Couch) {
    console.log(couch, "Eliminar Couch");
  }
}
