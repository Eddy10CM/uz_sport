import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: [
  `
  .contenedor-galery{
    width:100%;
  }
  .galery-photo{
    width: 19em;
    height: 19em;
    margin-right: 1%;
    background-color:black;
    display:inline-flex
  }
  `
  ]
})
export class GaleryComponent implements OnInit {
  @Input() fotos:any[]=[
    {
      url:"assets/img/galery-01.jpg"
    },
    {
      url:"assets/img/galery-02.jpg"
    },
    {
      url:"assets/img/galery-03.jpg"
    },
    {
      url:"assets/img/galery-04.jpg"
    },
    {
      url:"assets/img/galery-05.jpg"
    },
    {
      url:"assets/img/galery-06.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
