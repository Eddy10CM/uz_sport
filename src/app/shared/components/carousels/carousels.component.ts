import { Component, OnInit,ElementRef, Input } from '@angular/core';
export interface Fotos{
  foto:string
  }
@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
})
export class CarouselsComponent implements OnInit {
  
  constructor(private elementRef:ElementRef) { }
  @Input() tipoImagen:string="square-image";
  imageObject: Array<object> = [
    {
      image: 'assets/img/01.jpg',
        thumbImage: 'assets/img/01.jpg',
        alt: 'Image alt'
    },
    {
      image: 'assets/img/02.jpg',
        thumbImage: 'assets/img/02.jpg',
        alt: 'Image alt'
    },
    {
      image: 'assets/img/03.jpg',
        thumbImage: 'assets/img/03.jpg',
        alt: 'Image alt'
    },
    {
      image: 'assets/img/04.jpg',
        thumbImage: 'assets/img/04.jpg',
        alt: 'Image alt'
    },
    {
      image: 'assets/img/05.jpg',
        thumbImage: 'assets/img/05.jpg',
        alt: 'Image alt'
    },
    {
      image: 'assets/img/06.jpg',
        thumbImage: 'assets/img/06.jpg',
        alt: 'Image alt'
    }
];
  ngOnInit(): void {
    // this.carousel('carousel');
   
  }

  // esEntero(numero:number):boolean{
  //   return numero - Math.floor(numero) == 0
  // }
  // carousel(contenedor:string):void{
  //   let scrollPosition = 0;
  //   let numeroDeCards = 9;
  //  this.elementRef.nativeElement.querySelector(`.${contenedor}`)
  //  .addEventListener('click', (e:any)=>{
  //    console.log(e)
  //    let atras = this.elementRef.nativeElement.querySelector('.carousel-control-prev'),
  //    adelante = this.elementRef.nativeElement.querySelector('.carousel-control-next'),
  //    tgt = e.target;
  //    // console.log(atras,adelante,tgt,"atras,adelante,tgt");
  //    let carouselWidth = this.elementRef.nativeElement.querySelector(".carousel-inner").scrollWidth;
  //    let cardWidth = this.elementRef.nativeElement.querySelector(".carousel-item").offsetWidth;
    
  //    console.log(carouselWidth,"carouselWidth");
  //    console.log(cardWidth,"cardWidth");
  
  //    if(atras.querySelector('.bi-caret-left-fill') == tgt) {
  //      if (scrollPosition > 0) {
  //       this.count--;
  //        scrollPosition -= cardWidth;
  //        console.log(scrollPosition,"scrollPosition-")

  //        this.elementRef.nativeElement.querySelector(".carousel-inner").scroll(scrollPosition,0)
  //      }

  //    }
  //    if(adelante.querySelector('.bi-caret-right-fill') == tgt){
  //      console.log(this.count , (numeroDeCards/2)-1,"this.count , (numeroDeCards/2)-1")
  //      if (scrollPosition <= carouselWidth) {
  //       this.count++;
  //        scrollPosition += cardWidth;
  //        console.log(scrollPosition,"scrollPosition+")
  //        this.elementRef.nativeElement.querySelector(".carousel-inner").scroll(scrollPosition,0)

  //      }
  //    }
  //  })
//  }

}
