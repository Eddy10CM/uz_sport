import { Component, OnInit,ElementRef } from '@angular/core';
export interface Fotos{
  foto:string
  }
@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styles: [
    `
   img.image{
    border-radius:50%!important
   }
  `
  ]
})
export class CarouselsComponent implements OnInit {
  
  constructor(private elementRef:ElementRef) { }
  count:number = 0;
  numeroDeSliders:number = 0;
  sliders:any[]=[];
  indiceInicial:number=-1
  indiceFinal:number=3
  fotos:number[]=[1,2,3,4,5,6,7];
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
    if(!this.esEntero(this.fotos.length)){
      this.numeroDeSliders =  Number((this.fotos.length/3).toString().split(".")[0]);
      

      for (let index = 0; index < this.numeroDeSliders; index++) {
        this.sliders=[[this.count]];
        this.sliders[this.count].push({foto:'1'},{foto:'2'},{foto:'3'})
        this.count++;
      }
    }
    else{
      for (let index = 0; index < this.fotos.length; index++) {
        this.sliders.push(index);
        
        this.count++;
      }
    }
  }
  tresFotos(photos:number[]):number[]{
    console.log(JSON.parse(JSON.stringify(this.fotos)).slice(this.indiceInicial+=3,this.indiceFinal+=3),"JSON.parse(JSON.stringify(this.fotos)).slice(this.indiceInicial+=3,this.indiceFinal+=3);")
    return JSON.parse(JSON.stringify(this.fotos)).slice(this.indiceInicial+=3,this.indiceFinal+=3);

  }
  esEntero(numero:number):boolean{
    return numero - Math.floor(numero) == 0
  }
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
