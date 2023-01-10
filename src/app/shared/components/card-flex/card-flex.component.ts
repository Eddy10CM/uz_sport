import { Component, Input, OnInit } from '@angular/core';
export interface ImagenCardFlex{
  url:string;
  titulo:string
}
@Component({
  selector: 'app-card-flex',
  templateUrl: './card-flex.component.html',
  styles:[`
  .card{
    width:9.5rem;
    height: auto; 
    background-color:transparent;
    margin:auto
  }
  .imagen{
      width: 7rem;
      height: 7rem;
      margin: 1rem auto;
      border-radius: 50%;
    }
    .titulo{
      text-align:center;
      color:white
    }
  `]
})
export class CardFlexComponent implements OnInit {
  @Input() imagen!:ImagenCardFlex;
  constructor() { }

  ngOnInit(): void {
  }

}
