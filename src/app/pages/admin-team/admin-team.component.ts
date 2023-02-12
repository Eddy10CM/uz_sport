import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styles: [
  ]
})
export class AdminTeamComponent implements OnInit {
  MyTeams = []
  JSONTeam = {}
  resetTeam = false;

  constructor() { }

  ngOnInit(): void {
  }


  RegistarEnTorneo(idTeam: number) {
  }


  ValidateForm(event: any) {
  }
}
