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
  }
  ratingClick(rateItem:number){
    // this.rates[rateItem].active=true;
    if(this.rates.filter(x=>x.active).length ===1){
      this.rates[rateItem].active = !this.rates[rateItem].active
    }else{

      this.rates.forEach((element,index) => {
        if(index <= rateItem) this.rates[index].active = true
        else this.rates[index].active = false
      });
    }
    // for (let index = this.rates.length; index <= this.rates.length; index--) {
      // this.fills[index] = true;
    // }
    // console.log(this.fills,"this.fills")
    console.log(rateItem,"rateItem")
  }
  crearRates(max:number){
    for (let index = 0; index < max; index++) {
      this.rates.push({
        index,
        active:false
      });      
      this.fills.push(index<=this.rate-1);
    }
  }
}
