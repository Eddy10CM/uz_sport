import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-cards-flex',
  templateUrl: './layout-cards-flex.component.html',
  styles:[
    `
    .principal-layout{
      width:100%;
      background-color: black;
    }
    .card{
      width:9.5rem;
      height: auto; 
      background-color:transparent;
      margin:auto
    }
    .contenedor-cards{
      flex-flow: row wrap;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom:1.5em
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
    .titulo-layout{
      color:#90c43c !important;
      font-weight:bolder;
      padding:10px;
    }
    `
  ]
})
export class LayoutCardsFlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
