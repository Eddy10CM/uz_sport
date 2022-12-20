
import {Component, Input, OnInit, OnDestroy} from '@angular/core';

import { Image } from '../../../models/imagen.model'
@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: [
  `
*{
  margin:0; padding:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container{
  max-width: 100%;
}

.container .title{
  font-size: 25px;
  background-color: #000;
  color:#fff;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  padding:15px;
}

.container .image-container{
  columns:3 250px;
  gap:15px;
}

.container .image-container app-gallery-item img{
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
}
  `
  ]
})
export class GaleryComponent implements OnInit {
  @Input() GaleryImages:Image[]=[
    {
      src:"assets/img/galery-01.jpg",
      alt:'Imagen 1'
    },
    {
      src:"assets/img/galery-02.jpg",
      alt:'Imagen 2'
    },
    {
      src:"assets/img/galery-03.jpg",
      alt:'Imagen 3'
    },
    {
      src:"assets/img/galery-04.jpg",
      alt:'Imagen 4'
    },
    {
      src:"assets/img/galery-05.jpg",
      alt:'Imagen 5'
    },
    {
      src:"assets/img/galery-06.jpg",
      alt:'Imagen 6'
    },
  ];


  constructor() {
  }

  ngOnInit(){
 
  }

  ngOnDestroy(): void {
    this.GaleryImages=[];
  }

}
