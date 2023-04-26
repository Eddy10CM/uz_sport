import { Component, OnInit } from '@angular/core';
import { ImagenCardFlex } from 'src/app/shared/components/layout-cards-flex/layout-cards-flex.component';
import { TeamService } from 'src/app/shared/services/team.service';
import { Team } from 'src/app/core/class/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styles: [
  ]
})
export class TeamsComponent implements OnInit {
  imagenes:ImagenCardFlex[]=[
    // {
    //   url:'assets/img/01.jpg',
    //   titulo:'Imagen 1'
    // },
    ]
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.GetAll().subscribe(data=>{
      console.log(data)
      this.imagenes=[...data].map((x:Team)=>{
        return {
          url:'assets/img/01.jpg',
          titulo:x.Name
        }
      })
      console.log(this.imagenes,"this.imagenes")
    });
  }

}
