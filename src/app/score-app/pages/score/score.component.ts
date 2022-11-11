import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/core/class/point';
import { FOULS } from 'src/app/core/constantes/FOULS';
import { Foul } from '../../../core/class/foul';
import { POINTS } from '../../../core/constantes/POINTS';
import { Subscription, timer } from 'rxjs'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: [
  ]
})
export class ScoreComponent implements OnInit {
  pointsTeam1: number = 0;
  pointsTeam2: number = 0;
  QuarterTime: string = '1 er';

  foulsTeam1: Foul[] = [{
    Id: 1,
    Foul: false
  },
  {
    Id: 2,
    Foul: false
  },
  {
    Id: 3,
    Foul: false
  },
  {
    Id: 4,
    Foul: false
  },
  {
    Id: 5,
    Foul: false
  }];
  foulsTeam2: Foul[] = [{
    Id: 1,
    Foul: false
  },
  {
    Id: 2,
    Foul: false
  },
  {
    Id: 3,
    Foul: false
  },
  {
    Id: 4,
    Foul: false
  },
  {
    Id: 5,
    Foul: false
  }]; 

  counterQuarter: number = 24; // 900 segundos
  countDown!: Subscription;
  tick = 1000;

  alertFoulTeam1: boolean = false;
  alertFoulTeam2: boolean = false;

  pointsBTNS: Point[] = POINTS;

  constructor() { }

  ngOnInit(): void {
  }

  StartGame() {
    this.countDown = timer(0, this.tick)
    .subscribe((x) => {
      if (this.counterQuarter == 1 && x) {
        if (this.countDown) {
          //this.countDown.unsubscribe();
          this.counterQuarter = 900;
        }
      }
      --this.counterQuarter;
    });
  }


  addPoints(valuePoint: number, team: number) {
    if (team == 1) {
      this.pointsTeam1  +=+ valuePoint;
    } else {
      this.pointsTeam2 += valuePoint;
    }
  }

  addFouls(team: number) {
    if (team == 1) {
      this.alertFoulTeam1 = this.foulsTeam1.filter(f => f.Foul).length == 3 ? true : false;
      for (let index = 0; index < this.foulsTeam1.length; index++) {
        if (!this.foulsTeam1[index].Foul) {
          this.foulsTeam1[index].Foul = true;
          break;
        }
      }
    } else {
      this.alertFoulTeam2 = this.foulsTeam2.filter(f => f.Foul).length == 3 ? true : false;
      for (let index = 0; index < this.foulsTeam2.length; index++) {
        if (!this.foulsTeam2[index].Foul) {
          this.foulsTeam2[index].Foul = true;
          break;
        }
      }
    }
  }

  validateFoul(fouls: Foul[]) {
    
  }
}
