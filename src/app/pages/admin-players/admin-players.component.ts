import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/core/class/player';
import { Login } from 'src/app/core/class/login';
import { PLAYERFORM } from 'src/app/core/constantes/PLAYER';
import { Header } from 'src/app/core/interfaces/header';
import { AddPlayerComponent } from 'src/app/shared/modals/add-player/add-player.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlayerService } from 'src/app/shared/services/player.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styles: [
  ]
})
export class AdminPlayersComponent implements OnInit {

  JSONForm = {...PLAYERFORM};
  user!: Login;
  idUser!: string;
  resetPlayer: boolean = false;
  playeres: Player[] = [];
  headers: Header[] = [
    {value:'name',
      text: 'Nombre'},
    {value:'photoUrl',
      text: 'Foto'},
    {value:'birthday',
      text: 'Cumple'},
  
    {
      value: 'address',
      text: 'Dirección'
    },
    {
      value: 'position',
      text: 'Posición'
    },
    {
      value: 'email',
      text: 'Correo'
    },
    {
      value: 'Contact',
      text: 'Contacto'
    },
    {
      value: 'socialMedia',
      text: 'Red Social'
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
  constructor(private _auth: AuthService, private _user: UserService, private _player: PlayerService, public dialog: MatDialog) {
    this.user = _auth.getToken;
    this._user.GetUser(this.user.email)
    .subscribe(d => {
      this.idUser = d.id;
      this.getPlayers();
    });
  }
  ValidateForm(form: FormGroup): void {
    if (form.valid) {
      let newCouch: Player = {
        ...form.value
        ,IdUsuario: this.idUser
        
      }

      this._player.Add(newCouch)
      .then((d) => {
        console.log("🚀 ~ file: admin-league.component.ts:45 ~ AdminLeagueComponent ~ .then ~ ddddddd", d)
        this.resetPlayer = true;
      })
      .catch((err) => {
        console.log("🚀 ~ file: admin-league.component.ts:48 ~ AdminLeagueComponent ~ ValidateForm ~ err", err)
      })

      setTimeout(() => {
        this.resetPlayer = false;
      }, 100)

      
    }
  }
  Editar(player: Player) {
    this.JSONForm['name'].value=player.name
    this.JSONForm['photoUrl'].value=player.photoUrl
    this.JSONForm['birthday'].value=player.birthday
    this.JSONForm['address'].value=player.address
    this.JSONForm['position'].value=player.position
    this.JSONForm['email'].value=player.email
    this.JSONForm['Contact'].value=player.Contact
    this.JSONForm['socialMedia'].value=player.socialMedia
    
    
    let json = JSON.parse(JSON.stringify(this.JSONForm));
    delete json.ProfilePic;
    const dialogRef = this.dialog.open(AddPlayerComponent, {
      width: '450px',
      data: {data:json,Id:player.Id},
      
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
  Eliminar(player: Player) {
    console.log(player, "Eliminar Player");
    if(player.Id) this._player.delete(player.Id);
  }
  getPlayers(){
    this._player.GetAll().subscribe(players => {
      console.log(players, "players")
      setTimeout(() => {
        this.playeres = players;
        console.log(this.playeres)
      }, 100);
    });
  }
  ngOnInit(): void {
    
  }
  addCouch(idLeague: string) {
    console.log("🚀 ~ file: admin-league.component.ts:71 ~ AdminLeagueComponent ~ createTournamnet ~ idLeague", idLeague)
    const dialogRef = this.dialog.open(AddPlayerComponent, {
      width: '450px',
      data: idLeague,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
