import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-rol-de-juego',
  templateUrl: './rol-de-juego.component.html',
})
export class RolDeJuegoComponent implements OnInit {
  days:any[] = [];
  daysnames:any[] = [];
  startOfWeek = moment().startOf('isoWeek');
  endOfWeek = moment().endOf('isoWeek');
  constructor() { }
  ngOnInit(): void {
    
    
   
    var day = this.startOfWeek;
    
    while (day <= this.endOfWeek) {
        this.days.push(day.format("DD"));
        this.daysnames.push(day.format('dddd').substring(0,3));
        day = day.clone().add(1, 'd');
    }
    console.log(this.days,"days")
  }
  AnteriorSemana(){
    this.startOfWeek.subtract(1,"week");
    this.endOfWeek.subtract(1,"week");
    var day = this.startOfWeek;
    this.days=[];
    this.daysnames=[];
    while (day <= this.endOfWeek) {
        this.days.push(day.format("DD"));
        this.daysnames.push(day.format('dddd').substring(0,3));
        day = day.clone().add(1, 'd');
    }
    console.log(this.days,"days")
  }
  
  SiguienteSemana(){
    this.startOfWeek.add(1,"week");
    this.endOfWeek.add(1,"week");
    var day = this.startOfWeek;
    this.days=[];
    this.daysnames=[];
    while (day <= this.endOfWeek) {
        this.days.push(day.format("DD"));
        this.daysnames.push(day.format('dddd').substring(0,3));
        day = day.clone().add(1, 'd');
    }
    console.log(this.days,"days")
  }

}
