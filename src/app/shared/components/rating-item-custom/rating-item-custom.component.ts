import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface Rate{
  active:boolean;
  index:number;
}
@Component({
  selector: 'app-rating-item-custom',
  templateUrl: './rating-item-custom.component.html',
  styles: [
    `
    .balon{
      width:1.3em;
      margin-right:.5em;
      filter: invert(100%);
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
  rates:Rate[]=[]
  fills:boolean[]=[]
  constructor() { }

  ngOnInit(): void {
    this.rateChange.emit(this.rate);
    this.crearRates(this.max)
  
  }
  
  ratingHover(rateItem:number){
    // this.fills[rateItem] = true;
    this.fills.forEach((item,index)=>{
      this.fills[index] = index<=rateItem; 
    })
    console.log(this.fills,"this.fills")
    console.log(rateItem,"rateItem")
  }
  ratingDesHover(rateItem:number){
    this.fills.forEach((item,index)=>{
      this.fills[index] = false;  
    })
    // if(rateItem > 0) this.fills[0] = false;
  }
  ratingClick(rateItem:number){
    if(this.rates.filter(x=>x.active).length ===1){
      this.rates[rateItem].active = !this.rates[rateItem].active
    }else{
      this.rates[rateItem].active=!this.rates[rateItem].active;
      this.rates.forEach((element,index) => {
        if(index < rateItem) this.rates[index].active = true
        else if(index !== rateItem) this.rates[index].active = false
      });
    }
    // for (let index = this.rates.length; index <= this.rates.length; index--) {
      // this.fills[index] = true;
    // }
    // console.log(this.fills,"this.fills")
    console.log(rateItem,"rateItem")
  }
  crearRates(max:number){
    for (let index = 1; index <= max; index++) {
      this.rates.push({
        index:Number(index-1),
        active:(index-1)<=(this.rate-1)
      });      
      this.fills.push( (index-1)<=(this.rate-1));
    }
  }
}
