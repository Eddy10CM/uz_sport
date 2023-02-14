import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
import { Couch } from 'src/app/core/class/couches';
import { Login } from 'src/app/core/class/login';
import { jsonForm } from 'src/app/core/constantes/COUCH';
import { Header } from 'src/app/core/interfaces/header';
import { AddCouchComponent } from 'src/app/shared/modals/add-couch/add-couch.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CouchService } from 'src/app/shared/services/couch.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-couches',
  templateUrl: './admin-couches.component.html',
  styles: [
  ]
})
export class AdminCouchesComponent implements OnInit {
  JSONForm = {...jsonForm};
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  user!: Login;
  idUser!: string;
  resetCouch: boolean = false;
  couches: Couch[] = [];
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
  Id: string = "";
  constructor(private _auth: AuthService, private _user: UserService, private _couch: CouchService, public dialog: MatDialog) {
    this.user = _auth.getToken;
    this._user.GetUser(this.user.email)
    .subscribe(d => {
      this.idUser = d.id;
      this.getCouches();
    });
  }
  ValidateForm(form: FormGroup): void {
    if (form.valid) {
      let newCouch: Couch = {
        ...form.value
        ,IdUsuario: this.idUser
        
      }

      this._couch.Add(newCouch)
      .then((d) => {
        console.log("🚀 ~ file: admin-league.component.ts:45 ~ AdminLeagueComponent ~ .then ~ d", d)
        this.resetCouch = true;
      })
      .catch((err) => {
        console.log("🚀 ~ file: admin-league.component.ts:48 ~ AdminLeagueComponent ~ ValidateForm ~ err", err)
      })

      setTimeout(() => {
        this.resetCouch = false;
      }, 100)

      
    }
  }
  Editar(couch: Couch) {
    // if (couch.Id) { this.Id = couch.Id; delete couch.Id; }
    // couch.Specialty='El mejor';
    // this._couch.Update(Id,couch);
    this.JSONForm['Name'].value = couch.Name;
    this.JSONForm['Experiencia'].value = couch.Experiencia.toString();
    this.JSONForm['Specialty'].value = couch.Specialty;
  ;
    // this.JSONForm['ProfilePic'].value = couch.ProfilePic;
    
    this.JSONForm['Contact'].value = couch.Contact || '';
    let json = JSON.parse(JSON.stringify(this.JSONForm));
    delete json.ProfilePic;
    const dialogRef = this.dialog.open(AddCouchComponent, {
      width: '450px',
      data: {data:json,Id:couch.Id},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    this.JSONForm=Object.assign({});
    setTimeout(() => {
      this.JSONForm=json;
      console.log(this.JSONForm, "this.JSONForm");
    }, 400);
  }
  Eliminar(couch: Couch) {
    console.log(couch, "Eliminar Couch");
    if(couch.Id) this._couch.delete(couch.Id);
  }
  getCouches(){
    this._couch.GetAll().subscribe(couches => {
      console.log(couches, "couches")
      setTimeout(() => {
        this.couches = couches;
        console.log(this.couches)
      }, 100);
    });
  }
  ngOnInit(): void {
    
  }
  addCouch(idLeague: string) {
    console.log("🚀 ~ file: admin-league.component.ts:71 ~ AdminLeagueComponent ~ createTournamnet ~ idLeague", idLeague)
    const dialogRef = this.dialog.open(AddCouchComponent, {
      width: '450px',
      data: idLeague,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
