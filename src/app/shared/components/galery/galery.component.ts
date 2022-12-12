import { Component, OnInit, Input } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
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
  constructor(){}
  ngOnInit(): void {
  }
  private urls: string[] = [
      'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg',
      'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg',
      'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
      'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
      'http://littleguyintheeye.com/wp-content/uploads/2014/08/nature-3.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
        imageUrl: m
    });
  }
  
  

}
