import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-percent-item',
  templateUrl: './star-percent-item.component.html',
  styles: [
      `
      .estrella{
        margin-right:5px
      }
      .balon{
        width:2.2em;
        margin-right:.6em

      }
      .balon:hover{
        filter: invert(67%) sepia(89%) saturate(7492%) hue-rotate(346deg) brightness(80%) contrast(212%);
      }
      .hoverbalon{
        filter: invert(67%) sepia(89%) saturate(7492%) hue-rotate(346deg) brightness(80%) contrast(212%);
      }
      `
  ]
})
export class StarPercentItemComponent implements OnInit {
  @Input() max:number=0
  @Input() rate:number=0
  @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() readonly:boolean=false
  stars:number[]=[]
  fills:boolean[]=[]
  constructor() { }

  ngOnInit(): void {
    this.rateChange.emit(this.rate);
    this.crearStars(this.max)
  
  }
  ratingClick(star:number){

    for (let index = 0; index < this.fills.length; index++) {
      this.fills[index] = false;      
    }
    for (let index = star; index < this.fills.length && index>=0; index--) {
      this.fills[index] = true;
      
    }
    console.log(this.fills,"this.fills")
    console.log(star,"star")
  }
  crearStars(max:number){
    for (let index = 0; index < max; index++) {
      this.stars.push(index);      
      this.fills.push(index<=this.rate-1);
    }
  }
}
