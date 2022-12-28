import { Component, OnInit } from '@angular/core';
export interface ImagenCardFlex{
  url:string;
  titulo:string
}
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
  imagenes:ImagenCardFlex[] = [
    {
      url:'assets/img/01.jpg',
      titulo:'Imagen 1'
    },
    {
      url:'assets/img/02.jpg',
      titulo:'Imagen 2'
    },
    {
      url:'assets/img/03.jpg',
      titulo:'Imagen 3'
    },
    {
      url:'assets/img/04.jpg',
      titulo:'Imagen 4'
    },
    {
      url:'assets/img/05.jpg',
      titulo:'Imagen 5'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
