import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
import { Referee } from 'src/app/core/class/referees';
import { Login } from 'src/app/core/class/login';
import { jsonForm } from 'src/app/core/constantes/REFEREE';
import { Header } from 'src/app/core/interfaces/header';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { RefereeService } from 'src/app/shared/services/referee.service';
import { AddRefereeComponent } from 'src/app/shared/modals/add-referee/add-referee.component';
@Component({
  selector: 'app-admin-referees',
  templateUrl: './admin-referees.component.html',
  styles: [
  ]
})
export class AdminRefereesComponent implements OnInit {

  JSONForm = {...jsonForm};
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  user!: Login;
  idUser!: string;
  resetReferee: boolean = false;
  referees: Referee[] = [];
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
  constructor(private _auth: AuthService, private _user: UserService, private _referee: RefereeService, public dialog: MatDialog) {
    this.user = _auth.getToken;
    this._user.GetUser(this.user.email)
    .subscribe(d => {
      this.idUser = d.id;
      this.getReferees();
    });
  }
  ValidateForm(form: FormGroup): void {
    if (form.valid) {
      let newReferee: Referee = {
        ...form.value
        ,IdUsuario: this.idUser
        
      }

      this._referee.Add(newReferee)
      .then((d) => {
        console.log("🚀 ~ file: admin-league.component.ts:45 ~ AdminLeagueComponent ~ .then ~ d", d)
        this.resetReferee = true;
      })
      .catch((err) => {
        console.log("🚀 ~ file: admin-league.component.ts:48 ~ AdminLeagueComponent ~ ValidateForm ~ err", err)
      })

      setTimeout(() => {
        this.resetReferee = false;
      }, 100)

      
    }
  }
  Editar(referee: Referee) {
    // if (referee.Id) { this.Id = referee.Id; delete referee.Id; }
    // referee.Specialty='El mejor';
    // this._referee.Update(Id,referee);
    this.JSONForm['Name'].value = referee.Name;
    this.JSONForm['Experiencia'].value = referee.Experiencia.toString();

    // this.JSONForm['ProfilePic'].value = referee.ProfilePic;
    
    this.JSONForm['Contact'].value = referee.Contact || '';
    let json = JSON.parse(JSON.stringify(this.JSONForm));
    delete json.ProfilePic;
    const dialogRef = this.dialog.open(AddRefereeComponent, {
      width: '450px',
      data: {data:json,Id:referee.Id},
      
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
  Eliminar(referee: Referee) {
    // console.log(referee, "Eliminar Couch");
    if(referee.Id) this._referee.delete(referee.Id);
  }
  getReferees(){
    this._referee.GetAll().subscribe(referees => {
      console.log(referees, "referees")
      setTimeout(() => {
        this.referees = referees;
        console.log(this.referees)
      }, 100);
    });
  }
  ngOnInit(): void {
    
  }
  addCouch(idLeague: string) {
    console.log("🚀 ~ file: admin-league.component.ts:71 ~ AdminLeagueComponent ~ createTournamnet ~ idLeague", idLeague)
    const dialogRef = this.dialog.open(AddRefereeComponent, {
      width: '450px',
      data: idLeague,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
