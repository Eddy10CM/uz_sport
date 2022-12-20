import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from '../../../models/imagen.model'

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styles:[`
  :host {

  img {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: transform 6s;
    transform: scale(1) translateZ(0); 
  }

  &:hover {
    img {
      transition: transform 3s;
      transform: scale(1.33) translateZ(0); 
      z-index: 1000000000134;
      position: relative;
    }
  }
}
  `]
})
export class GalleryItemComponent implements OnInit {
  @Input() imagen!: Image;
 

  
  constructor() { }

  ngOnInit(): void {
  }

}
