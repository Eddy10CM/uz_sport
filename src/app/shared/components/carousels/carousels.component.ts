import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styles: [
  ]
})
export class CarouselsComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }
  count:number = 0;
  ngOnInit(): void {
    this.carousel('carousel');

  }
  carousel(contenedor:string):void{
    let scrollPosition = 0;
    let numeroDeCards = 9;
   this.elementRef.nativeElement.querySelector(`.${contenedor}`)
   .addEventListener('click', (e:any)=>{
     console.log(e)
     let atras = this.elementRef.nativeElement.querySelector('.carousel-control-prev'),
     adelante = this.elementRef.nativeElement.querySelector('.carousel-control-next'),
     tgt = e.target;
     // console.log(atras,adelante,tgt,"atras,adelante,tgt");
     let carouselWidth = this.elementRef.nativeElement.querySelector(".carousel-inner").scrollWidth;
     let cardWidth = this.elementRef.nativeElement.querySelector(".carousel-item").offsetWidth;
    
     console.log(carouselWidth,"carouselWidth");
     console.log(cardWidth,"cardWidth");
  
    
     if(atras.querySelector('.bi-caret-left-fill') == tgt) {
       if (scrollPosition > 0) {
        this.count--;
         scrollPosition -= cardWidth;
         console.log(scrollPosition,"scrollPosition-")

         this.elementRef.nativeElement.querySelector(".carousel-inner").scroll(scrollPosition,0)
       }

     }
     if(adelante.querySelector('.bi-caret-right-fill') == tgt){
       console.log(this.count , (numeroDeCards/2)-1,"this.count , (numeroDeCards/2)-1")
       if (this.count <= (numeroDeCards-1/2)) {
        this.count++;
         scrollPosition += cardWidth;
         console.log(scrollPosition,"scrollPosition+")
         this.elementRef.nativeElement.querySelector(".carousel-inner").scroll(scrollPosition,0)

       }
     }
   })
 }

}
