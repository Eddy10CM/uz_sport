import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Team } from 'src/app/core/class/team';
import { TEAMFORM } from 'src/app/core/constantes/TEAM';
import { Header } from 'src/app/core/interfaces/header';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-teams-tab',
  templateUrl: './teams-tab.component.html',
  styles: [
  ]
})
export class TeamsTabComponent implements OnInit {

  JSONForm = {...TEAMFORM};
  resetForm: boolean = false;
  nuevoTeam!: Team;
  teamses: Team[]=[];
  Id: string = "";
  headers: Header[] = [
    {
      value:'Name',
      text:'Nombre'
    },
    {
      value:'Birthday',
      text:'Cumpleaños'
    },
    {
      value:'TeamLogo',
      text:'Logo'
    },
    {
      value:'Category',
      text:'Categoria'
    },
    {
      value:'Captain',
      text:'Capitan'
    },
    {
      value:'Contact',
      text:'Contacto'
    },
    {
      value:'Email',
      text:'Correo'
    },
    {
      value:'PhotoUrl',
      text:'Foto'
    },
    {
      value:'socialMedia',
      text:'Social'
    },
    {
      value:'Rate',
      text:'Rate'
    },
    {
      value:'Players',
      text:'Jugadores'
    },
    {
      value:'fansLike',
      text:'Fans'
    },
    {
      value:'City',
      text:'Ciudad'
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
  constructor(private _team: TeamService) { }
  Guardar(form: FormGroup) {
    if (form.valid) {
      this.nuevoTeam = form.value;
      console.log("this.Id",this.Id);
      if (this.Id != "") {
        //update
        this.resetForm = true;
        this._team.Update(this.Id, this.nuevoTeam).then(newTeamResponse => {
          this.Id="";
          this.JSONForm = {...TEAMFORM};
        
          this.resetForm = true;
          setTimeout(() => {
            // this.resetForm = false;
            console.log("🚀 ~ file: profile.component.ts ~ line 55 ~ ProfileComponent ~ SaveLeague ~ d", newTeamResponse)
            // setTimeout(() => {
            //   this.nuevoTeam.Name='Nuevo Nombre';
            //   console.log(this.nuevoTeam);
            //   this._team.UpdateCouch(this.nuevoTeam);
            // }, 20000);
          }, 100)
        })
      }
      else {
        this._team.Add(this.nuevoTeam)
          .then(newCouchResponse => {
            this.resetForm = true;
            setTimeout(() => {
              console.log("🚀 ~ file: profile.component.ts ~ line 55 ~ ProfileComponent ~ SaveLeague ~ d", newCouchResponse)
              this.resetForm = false;
              // setTimeout(() => {
              //   this.nuevoTeam.Name='Nuevo Nombre';
              //   console.log(this.nuevoTeam);
              //   this._team.UpdateCouch(this.nuevoTeam);
              // }, 20000);
            }, 100)
          })
      }
    }
  }
  ngOnInit(): void {
    // console.log(this._team.Get(),"couches1");
    this._team.GetAll().subscribe(teamses => {
      console.log(teamses, "teamses")
      setTimeout(() => {
        this.teamses = teamses;
        console.log(this.teamses)
      }, 100);
    });
    // this._team.GetAll().su
    // console.log(this._team.Get(),"Get");
  }
  Editar(team_: Team) {
    if (team_.Id) { this.Id = team_.Id.toString(); delete team_.Id; }
    // team_.Specialty='El mejor';
    // this._team.Update(Id,team_);
    // this.JSONForm['Name'].value = team_.Name;
    // this.JSONForm['Experiencia'].value = team_.Experiencia.toString();
    // this.JSONForm['Specialty'].value = team_.Specialty;
  
    // this.JSONForm['ProfilePic'].value = couch.ProfilePic;
    // this.JSONForm['Contact'].value = couch.Contact || '';
    let json = JSON.parse(JSON.stringify(this.JSONForm));
    delete json.ProfilePic;
    this.JSONForm=Object.assign({});
    setTimeout(() => {
      this.JSONForm=json;
      console.log(this.JSONForm, "this.JSONForm");
    }, 400);
  }
  Eliminar(team_: Team) {
    console.log(team_, "Eliminar Couch");
    if(team_.Id) this._team.delete(team_.Id.toString());
  }

}
