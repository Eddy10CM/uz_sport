import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LEAGUEFORM } from '../../core/constantes/LEAGUE';
import { Login } from '../../core/class/login';
import { League } from '../../core/class/league';
import { UserService } from '../../shared/services/user.service';
import { LeagueService } from '../../shared/services/league.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTournamentComponent } from '../../shared/modals/add-tournament/add-tournament.component';

@Component({
  selector: 'app-admin-league',
  templateUrl: './admin-league.component.html',
  styles: [
  ]
})
export class AdminLeagueComponent implements OnInit {

  JSONLeague = LEAGUEFORM;
  user!: Login;
  idUser!: string;
  resetLeague: boolean = false;
  MyLeagues: League[] = [];
  constructor(private _auth: AuthService, private _user: UserService, private _leagueService: LeagueService, public dialog: MatDialog) {
    this.user = _auth.getToken;
    this._user.GetUser(this.user.email)
    .subscribe(d => {
      this.idUser = d.id;
      this.GetMyLeaguesInfo();
    });
  }

  ngOnInit(): void {
    
  }
    

  ValidateForm(form: FormGroup): void {
    if (form.valid) {
      let newLeague: League = {
        ...form.value
        ,IdUsuario: this.idUser
        ,Status: true
        ,Like: 0
      }

      this._leagueService.AddLeague(newLeague)
      .then((d) => {
        console.log("🚀 ~ file: admin-league.component.ts:45 ~ AdminLeagueComponent ~ .then ~ d", d)
        this.resetLeague = true;
      })
      .catch((err) => {
        console.log("🚀 ~ file: admin-league.component.ts:48 ~ AdminLeagueComponent ~ ValidateForm ~ err", err)
      })

      setTimeout(() => {
        this.resetLeague = false;
      }, 100)

      
    }
  }

  GetMyLeaguesInfo(): void {
    this._leagueService.GetMyLeagues(this.idUser)
    .subscribe(d => {
      this.MyLeagues = d; 
    })
  }
    

  createTournamnet(idLeague: string) {
    console.log("🚀 ~ file: admin-league.component.ts:71 ~ AdminLeagueComponent ~ createTournamnet ~ idLeague", idLeague)
    const dialogRef = this.dialog.open(AddTournamentComponent, {
      width: '450px',
      data: idLeague,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
