import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-item-custom',
  templateUrl: './rating-item-custom.component.html',
  styles: [
    `
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
export class RatingItemCustomComponent implements OnInit {

  @Input() max:number=0
  @Input() rate:number=0
  @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() readonly:boolean=false
  rates:number[]=[]
  fills:boolean[]=[]
  constructor() { }

  ngOnInit(): void {
    this.rateChange.emit(this.rate);
    this.crearRates(this.max)
  
  }
  ratingClick(rateItem:number){

    for (let index = 0; index < this.fills.length; index++) {
      this.fills[index] = false;      
    }
    for (let index = rateItem; index < this.fills.length && index>=0; index--) {
      this.fills[index] = true;
      
    }
    console.log(this.fills,"this.fills")
    console.log(rateItem,"rateItem")
  }
  crearRates(max:number){
    for (let index = 0; index < max; index++) {
      this.rates.push(index);      
      this.fills.push(index<=this.rate-1);
    }
  }
}
